'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import AlbumSection from '../components/AlbumsSection/AlbumsSection';
import ArtistCover from '../components/ArtistCover/ArtistCover';
import ArtistDetail from '../components/ArtistDetail/ArtistDetail';
import ArtistNavigation from '../components/ArtistNavigation/ArtistNavigation';
import Released from '../components/Released/Released';
import RowAlbumSection from '../components/RowAlbumSection/RowAlbumSection';
import TopMusicHeader from '../components/TopMusicHeader/TopMusicHeader';
import { ArtistPropsInterface } from './interfaces/artist-props.interface';
import styles from './page.module.scss';
import BaseApi from '@/app/api/BaseApi';

const ArtistPage = () => {
  const { id } = useParams();
  const [artistData, setArtistData] = useState<ArtistPropsInterface[]>([]);

  useEffect(() => {
    BaseApi.get('/artist').then((response) => {
      setArtistData(response.data);
    });
  }, []);

  const artistParam = artistData.find((artist) => artist.id === +id);
  if (artistParam === undefined) return null;

  return (
    <>
      <ArtistNavigation />
      <div className={styles.desktopArtistWrapper}>
        <ArtistDetail
          artistName={artistParam.artistName}
          biography={artistParam.biography}
        />
        <ArtistCover cover={artistParam.artistPhoto!} />
      </div>
      <Released id={artistParam.id!} />
      <AlbumSection artists={artistParam.albums!} />
      <TopMusicHeader />
      <RowAlbumSection albums={artistParam.musics!} />
    </>
  );
};

export default ArtistPage;
