import styles from './RowAlbumSection.module.scss';
import { rowAlbumData } from './row-album-dummy-data';
import AlbumRow from '@/app/Components/AlbumRow/AlbumRow';

const RowAlbumSection = () => {
  return (
    <div className={styles.topMusicContainer}>
      <div className={styles.topMusicWrapper}>
        {rowAlbumData.map((album, index) => (
          <AlbumRow
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
