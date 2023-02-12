import { Card } from 'antd';
import React, { FC } from 'react';
import './home.scss';

interface HomeScreenProps { }

const HomeScreen: FC<HomeScreenProps> = () => (
  <div className='HomeScreen'>
    <section id='present'>
      <div className='card'>
        <Card title="TERRARIUMS & PALUDARIUMS" bordered={false}>
          <p>a vivarium for smaller land animals, especially reptiles, amphibians, or terrestrial invertebrates, typically in the form of a glass-fronted case.</p>
        </Card>
      </div>
    </section>
    <section id='about'>

    </section>
  </div>
);

export default HomeScreen;
