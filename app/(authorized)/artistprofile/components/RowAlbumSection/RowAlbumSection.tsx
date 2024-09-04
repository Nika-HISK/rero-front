import styles from './RowAlbumSection.module.scss';
import { RowAlbumSectionPropsInterface } from './interfaces/row-album-section-props.interface';
import AlbumRow from '@/app/Components/AlbumRow/AlbumRow';

const RowAlbumSection = (props: RowAlbumSectionPropsInterface) => {
  return (
    <div className={styles.topMusicContainer}>
      <div className={styles.topMusicWrapper}>
        {props.albums.map((album) => (
          <AlbumRow
            id={album.id}
            key={album.id}
            duration={album.duration}
            albumName={album.albumName}
            cover={album.cover}
            music={album.music}
            artistName={album.artistName}
          />
        ))}
      </div>
    </div>
  );
};

export default RowAlbumSection;
