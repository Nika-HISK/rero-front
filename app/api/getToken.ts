'use server';

import { cookies } from 'next/headers';

const getToken = () => {
  const token = cookies().get('token');
  if (token) {
    return token;
  } else {
    return null;
  }
};
export default getToken;
