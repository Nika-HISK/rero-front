import React from 'react';
import Header from '../Components/Header/Header';
import RecoilWrapper from '../Components/RecoilWrapper/RecoilWrapper';

interface AuthorisedLayoutProps {
  children: React.ReactNode;
}

const AuthorisedLayout: React.FC<AuthorisedLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <RecoilWrapper>{children}</RecoilWrapper>
    </>
  );
};

export default AuthorisedLayout;
