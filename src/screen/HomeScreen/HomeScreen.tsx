import React, { FC } from 'react';
import styles from './HomeScreen.module.scss';

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = () => (
  <div className={styles.HomeScreen}>
    HomeScreen Component
  </div>
);

export default HomeScreen;
