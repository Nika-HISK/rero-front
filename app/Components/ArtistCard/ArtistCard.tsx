import Link from 'next/link';
import styles from './ArtistCard.module.scss';
import Image from 'next/image';

interface Props {
  artistName: string;
  artistPhoto: string;
}
const ArtistCard = (props: Props) => {
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
