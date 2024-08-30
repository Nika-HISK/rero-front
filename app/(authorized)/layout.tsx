'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalAudioManager from '../Components/GlobalAudioManager/GlobalAudioManager';
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
        <GlobalAudioManager />
      </RecoilRoot>
    </>
  );
};

export default AuthorisedLayout;
