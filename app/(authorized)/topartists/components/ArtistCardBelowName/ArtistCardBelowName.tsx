import Image from 'next/image';
import Link from 'next/link';
import styles from './ArtistCardBelowName.module.scss';
import { ArtistCardBelowNamePropsInterface } from './interfaces/artist-card-below-name-props.interface';

const ArtistCardBelowName = (props: ArtistCardBelowNamePropsInterface) => {
  return (
    <Link className={styles.wrapper} href={`/artistprofile/${props.id}`}>
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
