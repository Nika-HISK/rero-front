import styles from './AlbumsSection.module.scss';
import { AlbumsSectionPropsInterface } from './interfaces/album-section-props.interface';
import BelowNameAlbumCard from '@/app/Components/BelowNameAlbumCard/BelowNameAlbumCard';

const AlbumSection = (props: AlbumsSectionPropsInterface) => {
  return (
    <div className={styles.albumContainer}>
      <div className={styles.albumWrapper}>
        {props.artists.map((album) => (
          <BelowNameAlbumCard
            id={album.id}
            key={album.id}
            artistCover={album.artistCover}
            albumName={album.albumName}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumSection;
