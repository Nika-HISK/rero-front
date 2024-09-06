'use client';

import TopAlbumsNavigationAnchore from '../topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import ArtistCardBelowName from './components/ArtistCardBelowName/ArtistCardBelowName';
import styles from './page.module.scss';
import { artistSectionArray } from '@/app/HomePage/ArtistSection/artist-section-data/artist-secion-data';

const TopArtists = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <TopAlbumsNavigationAnchore />
      </div>
      <div className={styles.container}>
        {artistSectionArray.map((artist) => (
          <ArtistCardBelowName
            id={artist.id}
            key={artist.id}
            artistPhoto={artist.artistPhoto}
            artistName={artist.artistName}
          />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
