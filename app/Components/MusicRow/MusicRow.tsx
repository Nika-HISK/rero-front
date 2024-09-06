import styles from './MusicRow.module.scss';
import MusicRowImage from './components/MusicRowImage/MusicRowImage';
import { MusicRowPropsInterface } from './interfaces/music-row-props.interface';

const MusicRow = (props: MusicRowPropsInterface) => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.wrapper} onClick={props.onRowAlbumClick}>
        <MusicRowImage
          cover={props.cover}
          music={props.music}
          artist={props.artistName}
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

export default MusicRow;
