import Button from '../Components/Button/Button';
import RowAlbum from '../Components/RowAlbum/RowAlbum';
import { navigationArtistItems } from '../Constants/dummyJson/dummyJson';
import { ButtonMode, ButtonType } from '../Enums/Enums';
import AlbumSection from './components/AlbumsSection/AlbumsSection';
import ArtistCover from './components/ArtistCover/ArtistCover';
import ArtistDescription from './components/ArtistDescription/ArtistDescription';
import Header from './components/Header/Header';
import Navigation from './components/Navgiation/Navigation';
import { NavigationPropsInterface } from './components/Navgiation/intefaces';
import NavigationAnchors from './components/NavigationAnchores/NavigationAnchores';
import NavigationAnchores from './components/NavigationAnchores/NavigationAnchores';
import Overview from './components/Overview/Overview';
import Released from './components/Released/Released';
import RowAlbumSection from './components/RowAlbumSection/RowAlbumSection';
import TopMusicHeader from './components/TopMusicHeader/TopMusicHeader';
import styles from './page.module.scss';
import Image from 'next/image';

const artistPage = () => {
  return (
    <>
      <div className={styles.navigationBartwo}>
        <NavigationAnchors map={navigationArtistItems} />
      </div>
      <div className={styles.desktopArtistWrapper}>
        <div className={styles.desktopContainer}>
          <div className={styles.detailWrapper}>
            <div className={styles.navigationBar}>
              <NavigationAnchors map={navigationArtistItems} />
            </div>
            <ArtistDescription />
            <div className={styles.overviewWrapper}>
              <Overview />
            </div>
          </div>
        </div>
        <ArtistCover />
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

export default artistPage;
