'use client';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import HeaderInput from '../HeaderInput/HeaderInput';
import Icon from '../Icons/Icon';
import styles from './Header.module.scss';
import BaseApi from '@/app/api/BaseApi';
import { useEffect, useState } from 'react';
import { MusicPropsInterface } from './interfaces/music-props.interface';

const Header = () => {
  const [songs, setSongs] = useState<MusicPropsInterface[]>([]);
  const [filteredSongs, setFilteredSongs] = useState<MusicPropsInterface[]>([]);
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

  const handleSearch = async (value: string) => {
    if (value.trim() === '') {
      setFilteredSongs(songs);
      return;
    }
    const lowercasedValue = value.toLowerCase();
    try {
      const response = await BaseApi.get(`/search?query=${lowercasedValue}`);
      setFilteredSongs(response.data.musics || []);
    } catch (error) {
      console.error('Search failed:', error);
      setFilteredSongs(songs);
    }
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
