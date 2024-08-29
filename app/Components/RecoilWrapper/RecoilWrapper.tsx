'use client';

import { ReactNode } from 'react';

const RecoilWrapper = (props: { children: ReactNode }) => {
  return <>{props.children}</>;
};

export default RecoilWrapper;
