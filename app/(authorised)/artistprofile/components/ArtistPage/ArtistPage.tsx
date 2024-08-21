import AlbumSection from '../AlbumsSection/AlbumsSection';
import ArtistCover from '../ArtistCover/ArtistCover';
import ArtistDetail from '../ArtistDetail/ArtistDetail';
import ArtistNavigation from '../ArtistNavigation/ArtistNavigation';
import Overview from '../Overview/Overview';
import Released from '../Released/Released';
import RowAlbumSection from '../RowAlbumSection/RowAlbumSection';
import TopMusicHeader from '../TopMusicHeader/TopMusicHeader';
import styles from './ArtistPage.module.scss';

const ArtistPage = () => {
  return (
    <>
      <ArtistNavigation />
      <div className={styles.desktopArtistWrapper}>
        <ArtistDetail />
        <ArtistCover cover="/kendrika.png" />
      </div>
      <div className={styles.overviewContainer}>
        <Overview />
      </div>
      <Released />
      <AlbumSection />
      <TopMusicHeader />
      <RowAlbumSection />
    </>
  );
};

export default ArtistPage;
