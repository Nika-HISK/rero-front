import styles from './RowAlbum.module.scss';
import RowMusicPhoto from './components/RowMusicPhoto/RowMusicPhoto';
import Image from 'next/image';
import { RowAlbumProps } from './interfaces/Row-Album-Props.interface';

const RowAlbum = (props: RowAlbumProps) => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.wrapper} onClick={props.onRowAlbumClick}>
        <RowMusicPhoto
          cover={'/dummy'}
          music={'Music Name'}
          artist={'Artist Name'}
        />
        <p>{props.albumName}</p>
        <div className={styles.container}>
          <p>{props.duration}</p>
          <Image
            width={36}
            height={36}
            src="/plusMini.png"
            alt="plusButton"
            onClick={props.onPlusClick}
          />
        </div>
      </div>
    </div>
  );
};

export default RowAlbum;
