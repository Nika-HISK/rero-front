import Link from 'next/link';
import styles from './LongAlbumCover.module.scss';
import { LongAlbumCoverPropsInterface } from './interfaces/long-album-cover-props.interface';

const LongAlbumCover = (props: LongAlbumCoverPropsInterface) => {
  //TODO Link href
  return (
    <Link
      href=""
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <span className={styles.albumName}>{props.albumName}</span>
      <span className={styles.artistName}>{props.artistName}</span>
    </Link>
  );
};

export default LongAlbumCover;
