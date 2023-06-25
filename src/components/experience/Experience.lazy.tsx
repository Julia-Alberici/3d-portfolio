import React, { lazy, Suspense } from 'react';

const LazyExperience = lazy(() => import('./Experience.jsx'));

const Experience = () => (
  <Suspense fallback={null}>
    <LazyExperience />
  </Suspense>
);

export default Experience;