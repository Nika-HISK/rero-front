import Image from 'next/image';
import Link from 'next/link';
import styles from './BelowNameAlbumCard.module.scss';
import { AlbumBelowNamePropsInterface } from './interfaces/album-below-name.props';

const BelowNameAlbumCard = (props: AlbumBelowNamePropsInterface) => {
  return (
    <Link className={styles.container} href={`/topalbums/album/${props.id}`}>
      <Image src={props.cover} alt="Artist Photo" height={200} width={220} />
      <span>{props.albumName}</span>
    </Link>
  );
};

export default BelowNameAlbumCard;
