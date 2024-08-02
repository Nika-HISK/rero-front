import BelowNameAlbumCard from '@/app/Components/BelowNameAlbumCard/BelowNameAlbumCard';
import styles from './AlbumsSection.module.scss';

const AlbumSection = () => {
  return (
    <div className={styles.albumContainer}>
      <div className={styles.albumWrapper}>
        <BelowNameAlbumCard artistCover={'/big.jpg'} albumName={'Album Name'} />
        <BelowNameAlbumCard artistCover={'/big.jpg'} albumName={'Album Name'} />
        <BelowNameAlbumCard artistCover={'/big.jpg'} albumName={'Album Name'} />
        <BelowNameAlbumCard artistCover={'/big.jpg'} albumName={'Album Name'} />
      </div>
    </div>
  );
};

export default AlbumSection;
