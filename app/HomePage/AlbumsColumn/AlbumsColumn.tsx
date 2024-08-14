import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './AlbumsColumn.module.scss';
import LongAlbumCover from './LongAlbumCover/LongAlbumCover';
import { albumsColumn } from './album-column-data/album-column-data';

const AlbumsColumn = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title={'Top Albums'} />
      <div className={styles.container}>
        {albumsColumn.map((album, index) => (
          <LongAlbumCover
            key={index}
            artistName={album.artistName}
            albumName={album.albumName}
            backgroundImage={album.backgroundImage}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumsColumn;
