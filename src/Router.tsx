import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageTemplate from './pages/PageTemplate';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import PostDetailPage from './pages/PostPage/PostDetailPage';
import PostOwnerPage from './pages/PostPage/PostOwnerPage';

import Page404 from './pages/Page404';


const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PageTemplate />}>
        <Route index element={<HomePage />} />
        <Route path="posts/:postId" element={<PostPage />}>
          <Route index element={<PostDetailPage />} />
          <Route path="owner/:userId" element={<PostOwnerPage />} />
        </Route>
      </Route>
      <Route path='*' element={<Page404 />} />
    </Routes>
  </Router>
);

export default AppRouter;
