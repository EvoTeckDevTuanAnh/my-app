import { Footer } from 'antd/es/layout/layout';
import React, { FC } from 'react';
import styles from './Footer.module.scss';

interface FooterProps { }

const FooterComponent: FC<FooterProps> = () => (
  <div className={styles.Footer}>
    <Footer>Footer</Footer>
  </div>
);

export default FooterComponent;
