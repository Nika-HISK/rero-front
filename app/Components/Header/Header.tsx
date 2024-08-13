import Icon from '../Icons/Icon';
import styles from './Header.module.scss';
import Image from 'next/image';
const Header = () => {
  return (
    <div className={styles.fullscreenContainer}>
      <div className={styles.container}>
        <div className={styles.headerTable}>
          <Image src="/logo.png" alt="logo" width={57} height={24} />
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.userInterface}>
          <div className={styles.homeButton}>
            <Icon name={'home'} width={21} height={21} />
          </div>
          <Icon name={'playlist'} width={21} height={21} />
          <Icon name={'exit'} width={21} height={21} />
          <Icon name={'home'}  width={40} height={40} isActive/>
        </div>
      </div>
    </div>
  );
};

export default Header;
