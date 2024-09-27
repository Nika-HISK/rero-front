'use client';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import HeaderInput from '../HeaderInput/HeaderInput';
import Icon from '../Icons/Icon';
import styles from './Header.module.scss';
import { MusicPropsInterface } from './interfaces/music-props.interface';
import BaseApi from '@/app/api/BaseApi';

const Header = () => {
  const [, setSongs] = useState<MusicPropsInterface[]>([]);
  const [, setFilteredSongs] = useState<MusicPropsInterface[]>([]);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await BaseApi.get('/music');
      setSongs(response.data);
      setFilteredSongs(response.data);
    };

    fetchSongs();
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/login');
  };

  return (
    <div className={styles.fullscreenContainer}>
      <div className={styles.container}>
        <div className={styles.headerTable}>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={100} height={80} />
          </Link>
        </div>
        <div className={styles.userInterface}>
          <HeaderInput />
          <Link className={styles.homeButton} href="/">
            <Icon
              name={'home'}
              width={pathname === '/' ? 35 : 21}
              height={pathname === '/' ? 35 : 21}
              isActive={pathname === '/'}
            />
          </Link>
          <Link href={'/playlist'}>
            <Icon
              name={'playlist'}
              width={pathname === '/playlist' ? 35 : 21}
              height={pathname === '/playlist' ? 35 : 21}
              isActive={pathname === '/playlist'}
            />
          </Link>
          <Icon name={'exit'} width={21} height={21} onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default Header;
