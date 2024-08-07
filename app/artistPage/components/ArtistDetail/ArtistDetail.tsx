import { navigationArtistItems } from '@/app/Constants/dummyJson/dummyJson';
import ArtistDescription from '../ArtistDescription/ArtistDescription';
import NavigationAnchors from '../NavigationAnchores/NavigationAnchores';
import Overview from '../Overview/Overview';
import styles from './ArtistDetail.module.scss';

const ArtistDetail = () => {
  return (
    <div className={styles.desktopContainer}>
      <div className={styles.detailWrapper}>
        <div className={styles.navigationBar}>
          <NavigationAnchors map={navigationArtistItems} />
        </div>
        <ArtistDescription
          artistName="artist name"
          description="Here is description of an artist. admin should input this. Here is description of an artist."
        />
        <div className={styles.overviewWrapper}>
          <Overview />
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
