import TopAlbumsNavigationAnchore from '../topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import ArtistCardBelowName from './components/ArtistCardBelowName/ArtistCardBelowName';
import { ArtistsCard } from './components/ArtistCardBelowName/artist-dummy-data/artist-dummy-data';
import styles from './page.module.scss';

const TopArtists = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <TopAlbumsNavigationAnchore />
      </div>
      <div className={styles.container}>
        {ArtistsCard.map((artist, index) => (
          <ArtistCardBelowName
            key={index}
            artistPhoto={artist.artistPhoto}
            artistName={artist.artistName}
          />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
