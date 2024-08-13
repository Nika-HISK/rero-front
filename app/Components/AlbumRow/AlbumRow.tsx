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
          <div className={styles.plus}></div>
        </div>
      </div>
    </div>
  );
};

export default AlbumRow;
