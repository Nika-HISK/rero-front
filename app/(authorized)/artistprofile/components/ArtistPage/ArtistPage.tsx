import { useParams } from 'next/navigation';
import AlbumSection from '../AlbumsSection/AlbumsSection';
import ArtistCover from '../ArtistCover/ArtistCover';
import ArtistDetail from '../ArtistDetail/ArtistDetail';
import ArtistNavigation from '../ArtistNavigation/ArtistNavigation';
import Overview from '../Overview/Overview';
import Released from '../Released/Released';
import RowAlbumSection from '../RowAlbumSection/RowAlbumSection';
import TopMusicHeader from '../TopMusicHeader/TopMusicHeader';
import styles from './ArtistPage.module.scss';
import { artistSectionArray } from '@/app/HomePage/ArtistSection/artist-section-data/artist-secion-data';

const ArtistPage = () => {
  const { id } = useParams();

  const artistParam = artistSectionArray.find((artist) => artist.id === +id);
  if (artistParam === undefined) return null;
  const MusicData = artistParam.rowAlbumData;

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
      <AlbumSection artists={artistParam.albumData} />
      <TopMusicHeader />
      <RowAlbumSection albums={MusicData} />
    </>
  );
};

export default ArtistPage;
