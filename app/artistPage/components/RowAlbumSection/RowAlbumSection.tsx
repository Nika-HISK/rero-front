import RowAlbum from '@/app/Components/RowAlbum/RowAlbum';
import styles from './RowAlbumSection.module.scss';

const RowAlbumSection = () => {
  return (
    <div className={styles.topMusicContainer}>
      <div className={styles.topMusicWrapper}>
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3;33'} />
      </div>
    </div>
  );
};

export default RowAlbumSection;
