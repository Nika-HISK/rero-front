import Image from 'next/image';
import HeaderInput from '../HeaderInput/HeaderInput';
import Icon from '../Icons/Icon';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.fullscreenContainer}>
      <div className={styles.container}>
        <div className={styles.headerTable}>
          <Image src="/logo.png" alt="logo" width={100} height={80} />
          <div className={styles.desktopInput}>
            <HeaderInput placeholder={'Search'} />
          </div>
        </div>
        <div className={styles.userInterface}>
          <div className={styles.responsiveInput}>
            <HeaderInput placeholder={'Search'} />
          </div>
          <div className={styles.homeButton}>
            <Icon name={'home'} width={21} height={21} />
          </div>
          <Icon name={'playlist'} width={21} height={21} />
          <Icon name={'exit'} width={21} height={21} />
        </div>
      </div>
    </div>
  );
};

export default Header;
