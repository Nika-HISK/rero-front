import TopAlbumLibrary from './components/TopAlbumLibrary/TopAlbumLibrary';
import TopAlbumNavigation from './components/TopAlbumNavigation/TopAlbumNavigation';
import styles from './page.module.scss';

const TopAlbums = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <TopAlbumNavigation />
      </div>
      <TopAlbumLibrary />
    </>
  );
};

export default TopAlbums;
