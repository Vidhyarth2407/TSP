import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A visually hidden navigation component for SEO internal linking.
 * Uses the .sr-only class to remain crawlable but invisible to users.
 */
const HiddenNavigation = ({ links = [] }) => {
    if (!links || links.length === 0) return null;

    return (
        <nav className="sr-only" aria-hidden="true" tabIndex="-1">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        {link.to.startsWith('#') ? (
                            <a href={link.to}>{link.label}</a>
                        ) : (
                            <Link to={link.to}>{link.label}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HiddenNavigation;
