import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './TopHits.module.scss';
import { TopHitsAlbums } from './top-hits-data/top-hits-data';
import AlbumRow from '@/app/Components/AlbumRow/AlbumRow';

const TopHits = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="Top Hits" link="/tophits" />
      <div className={styles.container}>
        {TopHitsAlbums.map((album) => (
          <AlbumRow
            id={album.id}
            key={album.id}
            albumName={album.albumName}
            duration={album.duration}
            cover={album.cover}
            music={album.music}
            artistName={album.artistName}
          />
        ))}
      </div>
    </div>
  );
};

export default TopHits;
