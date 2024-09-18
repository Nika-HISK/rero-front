/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import styles from './RowAlbumSection.module.scss';
import { RowAlbumSectionPropsInterface } from './interfaces/row-album-section-props.interface';
import MusicRow from '@/app/Components/MusicRow/MusicRow';

const RowAlbumSection = (props: RowAlbumSectionPropsInterface) => {
  return (
    <div className={styles.topMusicContainer}>
      <div className={styles.topMusicWrapper}>
        {props.albums.map((album) => (
          <MusicRow
            id={album.id}
            key={album.id}
            duration={album.duration}
            albumName={album.album?.name!}
            coverImage={album.coverImage}
            music={album.name}
            artistName={album.artist?.artistName!}
          />
        ))}
      </div>
    </div>
  );
};

export default RowAlbumSection;
