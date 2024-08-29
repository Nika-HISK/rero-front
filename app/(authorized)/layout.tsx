'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';
import Header from '../Components/Header/Header';
import RecoilWrapper from '../Components/RecoilWrapper/RecoilWrapper';
import GlobalAudioManager from '../Components/GlobalAudioManager/GlobalAudioManager';

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
