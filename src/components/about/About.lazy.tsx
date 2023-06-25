import React, { lazy, Suspense } from 'react';

const LazyAbout = lazy(() => import('./About.jsx'));

const About = () => (
  <Suspense fallback={null}>
    <LazyAbout />
  </Suspense>
);

export default About;