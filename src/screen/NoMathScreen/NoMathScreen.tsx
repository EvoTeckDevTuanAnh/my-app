import React, { FC } from 'react';
import styles from './NoMathScreen.module.scss';

interface NoMathScreenProps {}

const NoMathScreen: FC<NoMathScreenProps> = () => (
  <div className={styles.NoMathScreen}>
    NoMathScreen Component
  </div>
);

export default NoMathScreen;
