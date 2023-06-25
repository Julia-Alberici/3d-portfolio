import React, { lazy, Suspense } from 'react';

const LazyHero = lazy(() => import('./Hero.jsx'));

const Hero = () => (
  <Suspense fallback={null}>
    <LazyHero />
  </Suspense>
);

export default Hero;