const WP_API_URL = 'https://blogs.thestarrypath.com.au/wp-json/wp/v2';

export const blogService = {
    async getPosts(page = 1, perPage = 10) {
        try {
            const response = await fetch(`${WP_API_URL}/posts?_embed&page=${page}&per_page=${perPage}`);
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            return data.map(post => {
                // Try to find the featured image URL from various potential WP API response structures
                let featuredImage = null;

                // 1. Standard _embedded way
                if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
                    featuredImage = post._embedded['wp:featuredmedia'][0].source_url;
                }
                // 2. Jetpack featured media
                else if (post.jetpack_featured_media_url) {
                    featuredImage = post.jetpack_featured_media_url;
                }
                // 3. Better Featured Image plugin
                else if (post.better_featured_image?.source_url) {
                    featuredImage = post.better_featured_image.source_url;
                }
                // 4. Fallback to featured_media ID if we had a way to fetch it (but we prefer embedded)

                return {
                    id: post.id,
                    title: post.title.rendered,
                    content: post.content.rendered,
                    excerpt: post.excerpt.rendered,
                    date: post.date,
                    slug: post.slug,
                    featuredImage: featuredImage,
                    author: post._embedded?.author?.[0]?.name || 'Admin'
                };
            });
        } catch (error) {
            console.error('Error fetching blogs:', error);
            return [];
        }
    },

    async getPostBySlug(slug) {
        try {
            const response = await fetch(`${WP_API_URL}/posts?_embed&slug=${slug}`);
            if (!response.ok) {
                throw new Error('Failed to fetch post');
            }
            const data = await response.json();
            if (data.length === 0) return null;
            const post = data[0];

            // Try to find the featured image URL
            let featuredImage = null;
            if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
                featuredImage = post._embedded['wp:featuredmedia'][0].source_url;
            } else if (post.jetpack_featured_media_url) {
                featuredImage = post.jetpack_featured_media_url;
            } else if (post.better_featured_image?.source_url) {
                featuredImage = post.better_featured_image.source_url;
            }

            return {
                id: post.id,
                title: post.title.rendered,
                content: post.content.rendered,
                excerpt: post.excerpt.rendered,
                date: post.date,
                slug: post.slug,
                featuredImage: featuredImage,
                author: post._embedded?.author?.[0]?.name || 'Admin'
            };
        } catch (error) {
            console.error('Error fetching blog post:', error);
            return null;
        }
    }
};
