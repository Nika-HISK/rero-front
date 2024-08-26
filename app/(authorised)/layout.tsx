'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';
import Header from '../Components/Header/Header';
import RecoilWrapper from '../Components/RecoilWrapper/RecoilWrapper';

interface AuthorisedLayoutProps {
  children: React.ReactNode;
}

const AuthorisedLayout: React.FC<AuthorisedLayoutProps> = ({ children }) => {
  return (
    <>
      <RecoilRoot>
        <Header />
        <RecoilWrapper>{children}</RecoilWrapper>
      </RecoilRoot>
    </>
  );
};

export default AuthorisedLayout;
