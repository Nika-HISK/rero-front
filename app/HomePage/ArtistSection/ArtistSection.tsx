import { useEffect, useState } from 'react';
import styles from './ArtistSection.module.scss';
import ArtistCard from '@/app/Components/ArtistCard/ArtistCard';
import { ArtistCardPropsInterface } from '@/app/Components/ArtistCard/interfaces/artist-card-props.interface';
import BaseApi from '@/app/api/BaseApi';

const ArtistSection = () => {
  const [artists, setArtists] = useState<ArtistCardPropsInterface[]>([]);

  useEffect(() => {
    BaseApi.get('/artist').then((response) => {
      setArtists(response.data);
    });
  }, []);

  return (
    <div className={styles.parentWrapper}>
      <div className={styles.wrapper}>
        {artists.slice(0, 4).map((artist) => (
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
