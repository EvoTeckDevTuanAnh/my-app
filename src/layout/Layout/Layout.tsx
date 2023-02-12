import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

interface LayoutProps {
  children?: any
}

const LayoutComponent: FC<LayoutProps> = ({ children }) => (
  <div className={styles.Layout}>
    <Layout>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </Layout>
  </div>
);

export default LayoutComponent;
