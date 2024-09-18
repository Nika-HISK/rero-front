import { TopHitsAlbums } from '../../HomePage/TopHits/top-hits-data/top-hits-data';
import TopAlbumsNavigationAnchore from '../topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import styles from './page.module.scss';
import MusicRow from '@/app/Components/MusicRow/MusicRow';

const TopCharts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <TopAlbumsNavigationAnchore />
      </div>
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

export default TopCharts;
