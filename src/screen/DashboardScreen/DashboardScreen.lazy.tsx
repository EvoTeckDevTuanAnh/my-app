import React, { lazy, Suspense } from 'react';

const LazyDashboardScreen = lazy(() => import('./DashboardScreen'));

const DashboardScreen = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDashboardScreen {...props} />
  </Suspense>
);

export default DashboardScreen;
