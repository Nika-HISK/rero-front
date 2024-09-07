'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import AlbumSection from '../components/AlbumsSection/AlbumsSection';
import ArtistCover from '../components/ArtistCover/ArtistCover';
import ArtistDetail from '../components/ArtistDetail/ArtistDetail';
import ArtistNavigation from '../components/ArtistNavigation/ArtistNavigation';
import Overview from '../components/Overview/Overview';
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
      console.log(artistData);
    });
  }, []);

  const artistParam = artistData.find((artist) => artist.id === +id);
  if (artistParam === undefined) return null;
  const MusicData = artistParam.musics;

  return (
    <>
      <ArtistNavigation />
      <div className={styles.desktopArtistWrapper}>
        <ArtistDetail
          artistName={artistParam.artistName}
          biography={artistParam.biography}
          albums={MusicData}
        />
        <ArtistCover cover={artistParam.artistPhoto} />
      </div>
      <div className={styles.overviewContainer}>
        <Overview albums={MusicData} />
      </div>
      <Released />
      <AlbumSection artists={artistParam.albums} />
      <TopMusicHeader />
      <RowAlbumSection albums={MusicData} />
    </>
  );
};

export default ArtistPage;
