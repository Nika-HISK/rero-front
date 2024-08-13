import BelowNameAlbumCard from '@/app/Components/BelowNameAlbumCard/BelowNameAlbumCard';
import styles from './AlbumsSection.module.scss';
import { albumData } from './album-dummy-data';

const AlbumSection = () => {
  return (
    <div className={styles.albumContainer}>
      <div className={styles.albumWrapper}>
        {albumData.map((album, index) => (
          <BelowNameAlbumCard
            key={index}
            artistCover={album.artistCover}
            albumName={album.albumName}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumSection;
