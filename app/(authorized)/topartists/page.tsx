'use client';

import { useEffect, useState } from 'react';
import { ArtistPropsInterface } from '../artistprofile/[id]/interfaces/artist-props.interface';
import TopAlbumsNavigationAnchore from '../topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import ArtistCardBelowName from './components/ArtistCardBelowName/ArtistCardBelowName';
import styles from './page.module.scss';
import HeaderInput from '@/app/Components/HeaderInput/HeaderInput';
import BaseApi from '@/app/api/BaseApi';

const TopArtists = () => {
  const [artistData, setArtistData] = useState<ArtistPropsInterface[]>([]);
  const [filteredArtists, setFilteredArtists] = useState<
    ArtistPropsInterface[]
  >([]);
  const [, setSearchTerm] = useState('');

  useEffect(() => {
    BaseApi.get('/artist').then((response) => {
      setArtistData(response.data);
      setFilteredArtists(response.data);
    });
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.trim() === '') {
      setFilteredArtists(artistData);
    } else {
      const lowercasedValue = value.toLowerCase();
      const filtered = artistData.filter((artist) =>
        artist.artistName.toLowerCase().includes(lowercasedValue),
      );
      setFilteredArtists(filtered);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contWrapper}>
        <div className={styles.navigation}>
          <TopAlbumsNavigationAnchore />
        </div>
        <div className={styles.responsiveInput}>
          <HeaderInput
            onSearch={handleSearch}
            results={filteredArtists.map((song) => song.artistName)}
          />
        </div>
      </div>
      <div className={styles.container}>
        {filteredArtists.map((artist) => (
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
