import React, { lazy, Suspense } from 'react';

const LayoutComponent = lazy(() => import('./Layout'));

const Layout = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LayoutComponent {...props} />
  </Suspense>
);

export default Layout;
