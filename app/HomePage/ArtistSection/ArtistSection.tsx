import styles from './ArtistSection.module.scss';
import { artistSectionArray } from './artist-section-data/artist-secion-data';
import ArtistCard from '@/app/Components/ArtistCard/ArtistCard';

const ArtistSection = () => {
  return (
    <div className={styles.parentWrapper}>
      <div className={styles.wrapper}>
        {artistSectionArray.slice(0, 4).map((artist) => (
          <ArtistCard
            key={artist.id}
            id={artist.id}
            artistName={artist.artistName}
            artistPhoto={artist.artistPhoto}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistSection;
