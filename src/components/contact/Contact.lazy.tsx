import React, { lazy, Suspense } from 'react';

const LazyContact = lazy(() => import('./Contact.jsx'));

const Contact = () => (
  <Suspense fallback={null}>
    <LazyContact />
  </Suspense>
);

export default Contact;