import { RowAlbumSectionPropsInterface } from '../RowAlbumSection/interfaces/row-album-section-props.interface';
import styles from './Overview.module.scss';
import AlbumRow from '@/app/Components/AlbumRow/AlbumRow';

const Overview = (props: RowAlbumSectionPropsInterface) => {
  return (
    <>
      <div className={styles.overview}>
        <span>Overview</span>
      </div>
      <div className={styles.timeContainer}>
        {props.albums.slice(0, 4).map((album) => (
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
    </>
  );
};

export default Overview;
