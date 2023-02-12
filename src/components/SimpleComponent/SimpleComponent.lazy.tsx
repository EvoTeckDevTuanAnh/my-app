import React, { lazy, Suspense } from 'react';

const LazySimpleComponent = lazy(() => import('./SimpleComponent'));

const SimpleComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySimpleComponent {...props} />
  </Suspense>
);

export default SimpleComponent;
