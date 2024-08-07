import styles from './ArtistDescription.module.scss';
import { ArtistDescriptionPropsInterface } from './interfaces/artist-description-props.interface';

const ArtistDescription = (props: ArtistDescriptionPropsInterface) => {
  return (
    <div className={styles.textContainer}>
      <span className={styles.artist}>Artist</span>
      <h1>{props.artistName}</h1>
      <span className={styles.description}>{props.description}</span>
    </div>
  );
};

export default ArtistDescription;
