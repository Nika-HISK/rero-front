import Image from 'next/image';
import Link from 'next/link';
import styles from './ArtistCardBelowName.module.scss';
import { ArtistCardBelowNamePropsInterface } from './artist-card-below-name-props.interface/artist-card-below-name-props.interface';

const ArtistCardBelowName = (props: ArtistCardBelowNamePropsInterface) => {
  //TODO Link Href
  return (
    <Link className={styles.wrapper} href="">
      <Image
        src={props.artistPhoto}
        width={392}
        height={264}
        alt="artistPhoto"
      />
      <div className={styles.container}>
        <span>{props.artistName}</span>
      </div>
    </Link>
  );
};

export default ArtistCardBelowName;
