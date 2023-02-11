import React, { lazy, Suspense } from 'react';

const LazyNoMathScreen = lazy(() => import('./NoMathScreen'));

const NoMathScreen = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNoMathScreen {...props} />
  </Suspense>
);

export default NoMathScreen;
