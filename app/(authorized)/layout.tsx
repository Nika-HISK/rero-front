'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalAudioManager from '../Components/GlobalAudioManager/GlobalAudioManager';
import Header from '../Components/Header/Header';

interface AuthorisedLayoutProps {
  children: React.ReactNode;
}

const AuthorisedLayout: React.FC<AuthorisedLayoutProps> = ({ children }) => {
  return (
    <>
      <RecoilRoot>
        <Header />
        {children}
        <GlobalAudioManager />
      </RecoilRoot>
    </>
  );
};

export default AuthorisedLayout;
