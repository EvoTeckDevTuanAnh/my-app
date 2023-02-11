import React, { FC } from 'react';
import styles from './DashboardScreen.module.scss';

interface DashboardScreenProps {}

const DashboardScreen: FC<DashboardScreenProps> = () => (
  <div className={styles.DashboardScreen}>
    DashboardScreen Component
  </div>
);

export default DashboardScreen;
