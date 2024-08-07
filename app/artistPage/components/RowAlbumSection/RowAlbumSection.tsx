import RowAlbum from '@/app/Components/RowAlbum/RowAlbum';
import styles from './RowAlbumSection.module.scss';
import { rowAlbumData } from './row-album-dummy-data';

const RowAlbumSection = () => {
  return (
    <div className={styles.topMusicContainer}>
      <div className={styles.topMusicWrapper}>
        {rowAlbumData.map((album, index) => (
          <RowAlbum
            key={index}
            duration={album.duration}
            albumName={album.albumName}
          />
        ))}
      </div>
    </div>
  );
};

export default RowAlbumSection;
