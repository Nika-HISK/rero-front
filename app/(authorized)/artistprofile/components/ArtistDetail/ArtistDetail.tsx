import ArtistDescription from '../ArtistDescription/ArtistDescription';
import NavigationAnchors from '../NavigationAnchores/NavigationAnchores';
import Overview from '../Overview/Overview';
import styles from './ArtistDetail.module.scss';
import { ArtistDetailPropsInterface } from './interfaces/artist-detail-props.interface';

const ArtistDetail = (props: ArtistDetailPropsInterface) => {
  return (
    <div className={styles.desktopContainer}>
      <div className={styles.detailWrapper}>
        <div className={styles.navigationBar}>
          <NavigationAnchors />
        </div>
        <ArtistDescription
          artistName={props.artistName}
          description={props.description}
        />
        <div className={styles.overviewWrapper}>
          <Overview />
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
