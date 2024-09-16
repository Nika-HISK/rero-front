import { RowAlbumSectionPropsInterface } from '../RowAlbumSection/interfaces/row-album-section-props.interface';
import styles from './Overview.module.scss';
import MusicRow from '@/app/Components/MusicRow/MusicRow';

const Overview = (props: RowAlbumSectionPropsInterface) => {
  return (
    <>
      <div className={styles.overview}>
        <span>Overview</span>
      </div>
      <div className={styles.timeContainer}>
        {props.albums.slice(0, 4).map((album) => (
          <MusicRow
            id={album.id}
            key={album.id}
            duration={album.duration}
            albumName={album.albumName}
            coverImage={album.cover}
            music={album.music}
            artistName={album.artistName}
          />
        ))}
      </div>
    </>
  );
};

export default Overview;
