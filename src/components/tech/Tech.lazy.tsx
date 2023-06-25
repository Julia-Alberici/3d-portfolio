import React, { lazy, Suspense } from 'react';

const LazyTech = lazy(() => import('./Tech.jsx'));

const Tech = () => (
  <Suspense fallback={null}>
    <LazyTech />
  </Suspense>
);

export default Tech;