import TopAlbumNavigation from '../../topalbums/components/TopAlbumNavigation/TopAlbumNavigation';
import AlbumLibrary from '../components/AlbumLibrary/AlbumLibrary';
import styles from '../page.module.scss';

const Album = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <TopAlbumNavigation />
      </div>
      <AlbumLibrary />
    </>
  );
};

export default Album;
