import ArtistDescription from '../ArtistDescription/ArtistDescription';
import { ArtistDescriptionPropsInterface } from '../ArtistDescription/interfaces/artist-description-props.interface';
import NavigationAnchors from '../NavigationAnchores/NavigationAnchores';
import Overview from '../Overview/Overview';
import styles from './ArtistDetail.module.scss';

const ArtistDetail = (props: ArtistDescriptionPropsInterface) => {
  return (
    <div className={styles.desktopContainer}>
      <div className={styles.detailWrapper}>
        <div className={styles.navigationBar}>
          <NavigationAnchors />
        </div>
        <ArtistDescription
          artistName={props.artistName}
          biography={props.biography}
        />
        <div className={styles.overviewWrapper}>
          <Overview />
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
