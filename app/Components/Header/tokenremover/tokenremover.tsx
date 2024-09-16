'use server';
import { cookies } from 'next/headers';

const Tokenremover = () => {
  const cookieStore = cookies();
  cookieStore.delete('token')
};

export default Tokenremover;
