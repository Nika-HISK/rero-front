'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HeaderInput from '../HeaderInput/HeaderInput';
import Icon from '../Icons/Icon';
import styles from './Header.module.scss';

const Header = () => {
  const pathname = usePathname();
  return (
    <div className={styles.fullscreenContainer}>
      <div className={styles.container}>
        <div className={styles.headerTable}>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={100} height={80} />
          </Link>
          <div className={styles.desktopInput}>
            <HeaderInput placeholder={'Search'} />
          </div>
        </div>
        <div className={styles.userInterface}>
          <div className={styles.responsiveInput}>
            <HeaderInput placeholder={'Search'} />
          </div>
          <Link className={styles.homeButton} href="/">
            {pathname == '/' ? (
              <Icon name={'home'} width={35} height={35} isActive />
            ) : (
              <Icon name={'home'} width={21} height={21} />
            )}
          </Link>
          <Link href={'/playlist'}>
            {pathname == '/playlist' ? (
              <Icon name={'playlist'} width={35} height={35} isActive />
            ) : (
              <Icon name={'playlist'} width={21} height={21} />
            )}
          </Link>
          <Icon name={'exit'} width={21} height={21} />
        </div>
      </div>
    </div>
  );
};

export default Header;
