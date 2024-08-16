import AlbumRow from '../Components/AlbumRow/AlbumRow';
import { TopHitsAlbums } from '../HomePage/TopHits/top-hits-data/top-hits-data';
import TopAlbumsNavigationAnchore from '../topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import styles from './page.module.scss';

const TopCharts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <TopAlbumsNavigationAnchore />
      </div>
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

export default TopCharts;
