import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import StoryPage from './pages/StoryPage';
import InnerStarsPage from './pages/InnerStarsPage';
import LearningStarsPage from './pages/LearningStarsPage';
import ResourcesPage from './pages/ResourcesPage';
import BlogPostPage from './pages/BlogPostPage';
import './styles/theme.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/inner-stars" element={<InnerStarsPage />} />
          <Route path="/programs/learning-stars" element={<LearningStarsPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/blogs-post/:slug" element={<BlogPostPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
