import TopAlbumsNavigationAnchore from '../TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import styles from './TopAlbumNavigation.module.scss';

const TopAlbumNavigation = () => {
  return (
    <div className={styles.wrapper}>
      <TopAlbumsNavigationAnchore />
    </div>
  );
};

export default TopAlbumNavigation;
