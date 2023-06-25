import React, { lazy, Suspense } from 'react';

const LazyWorks = lazy(() => import('./Works.jsx'));

const Works = () => (
  <Suspense fallback={null}>
    <LazyWorks />
  </Suspense>
);

export default Works;