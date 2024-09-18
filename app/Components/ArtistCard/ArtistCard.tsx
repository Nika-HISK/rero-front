import Image from 'next/image';
import Link from 'next/link';
import styles from './ArtistCard.module.scss';
import { ArtistCardPropsInterface } from './interfaces/artist-card-props.interface';

const ArtistCard = (props: ArtistCardPropsInterface) => {
  return (
    <Link href={`/artistprofile/${props.id}`} className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          src={props.artistPhoto}
          alt={props.artistName}
          width={158}
          height={274}
          className={styles.photo}
        />
      </div>
      <div className={styles.containerParagraph}>
        <p>{props.artistName}</p>
      </div>
    </Link>
  );
};

export default ArtistCard;
