import styles from './ArtistSection.module.scss';
import { artistSectionArray } from './artist-section-data/artist-secion-data';
import ArtistCard from '@/app/Components/ArtistCard/ArtistCard';

const ArtistSection = () => {
  return (
    <div className={styles.parentWrapper}>
      <div className={styles.wrapper}>
        {artistSectionArray.map((artist, index) => (
          <ArtistCard
            key={index}
            artistName={artist.artistName}
            artistPhoto={artist.artistPhoto}
            id={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistSection;
