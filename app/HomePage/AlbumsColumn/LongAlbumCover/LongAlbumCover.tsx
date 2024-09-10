import Link from 'next/link';
import styles from './LongAlbumCover.module.scss';
import { LongAlbumCoverPropsInterface } from './interfaces/long-album-cover-props.interface';
import { useParams } from 'next/navigation';

const LongAlbumCover = (props: LongAlbumCoverPropsInterface) => {
  const { id } = useParams();
  return (
    <Link
      href={`/topalbums/album/${props.id}`}
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
