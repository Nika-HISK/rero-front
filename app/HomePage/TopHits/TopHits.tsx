import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './TopHits.module.scss';
import { TopHitsAlbums } from './top-hits-data/top-hits-data';
import MusicRow from '@/app/Components/MusicRow/MusicRow';

const TopHits = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="Top Hits" link="/tophits" />
      <div className={styles.container}>
        {TopHitsAlbums.map((album) => (
          <MusicRow
            id={album.id}
            key={album.id}
            albumName={album.albumName}
            duration={album.duration}
            coverImage={album.cover}
            music={album.music}
            artistName={album.artistName}
          />
        ))}
      </div>
    </div>
  );
};

export default TopHits;
