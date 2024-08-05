import Image from 'next/image';
import Link from 'next/link';
import styles from './ArtistCard.module.scss';
import { ArtistCardPropsInterface } from './interfaces/artist-card-props.interface';

const ArtistCard = (props: ArtistCardPropsInterface) => {
  // TODO: add href in Link '
  return (
    <div className={styles.wrapper}>
      <Link href="">
        <div className={styles.container}>
          <Image
            src={props.artistPhoto}
            alt="artistPhoto"
            width={158}
            height={305}
          />
        </div>
        <div className={styles.containerParagraph}>
          <p>{props.artistName}</p>
        </div>
      </Link>
    </div>
  );
};

export default ArtistCard;
