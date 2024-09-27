import { ArtistPropsInterface } from '../../[id]/interfaces/artist-props.interface';
import ArtistDescription from '../ArtistDescription/ArtistDescription';
import NavigationAnchors from '../NavigationAnchores/NavigationAnchores';
import styles from './ArtistDetail.module.scss';

const ArtistDetail = (props: ArtistPropsInterface) => {
  return (
    <div className={styles.desktopContainer}>
      <div className={styles.detailWrapper}>
        <div className={styles.navigationBar}>
          <NavigationAnchors />
        </div>
        <ArtistDescription
          artistName={props.artistName!}
          biography={props.biography!}
        />
      </div>
    </div>
  );
};

export default ArtistDetail;
