import { NextPage } from 'next';
import React from 'react';

import LogoDark from '@app/assets/images/logo/logo-dark.svg';
import MainLayout from '@app/components/MainLayout';
import { Icon } from '@app/ui-kit';

import s from './HomePage.module.scss';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <LogoDark className={s.logo} />
      <h1 className={s.title}>Secure Shares</h1>
      <p className={s.text}>The First AI-Powered RWA Marketplace</p>
      <div className={s.icons}>
        <Icon name="email" />
        <Icon name="socialX" />
      </div>
    </MainLayout>
  );
};

export default HomePage;
