import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './TopHits.module.scss';
import { TopHitsAlbums } from './top-hits-data/top-hits-data';
import AlbumRow from '@/app/Components/AlbumRow/AlbumRow';

const TopHits = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="Top Hits" link="/" />
      <div className={styles.container}>
        {TopHitsAlbums.map((album, index) => (
          <AlbumRow
            key={index}
            albumName={album.albumName}
            duration={album.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default TopHits;
