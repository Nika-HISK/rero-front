import Image from 'next/image';
import { AlbumBelowNamePropsInterface } from './interfaces/album-below-name.props';
import styles from './BelowNameAlbumCard.module.scss';

const BelowNameAlbumCard = (props: AlbumBelowNamePropsInterface) => {
  return (
    <div className={styles.container}>
      <Image
        src={props.artistCover}
        alt="Artist Photo"
        height={200}
        width={220}
      />
      <span>{props.albumName}</span>
    </div>
  );
};

export default BelowNameAlbumCard;
