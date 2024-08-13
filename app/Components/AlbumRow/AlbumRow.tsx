import Image from 'next/image';
import styles from './AlbumRow.module.scss';
import MusicRowImage from './components/MusicRowImage/MusicRowImage';
import { AlbumRowPropsInterface } from './interfaces/album-row-props.interface';

const AlbumRow = (props: AlbumRowPropsInterface) => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.wrapper} onClick={props.onRowAlbumClick}>
        <MusicRowImage
          cover={'/big.jpg'}
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

export default AlbumRow;
