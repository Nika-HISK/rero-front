import Image from 'next/image';
import styles from './MusicPhoto.module.scss';
import { MusicPhotoPropsInterface } from '../../interfaces/music-photo-props.interface';

const MusicPhoto = (props: MusicPhotoPropsInterface) => (
  <div className={styles.musicPhoto}>
    <div className={styles.photo}>
      <Image src={props.src} width={78} height={78} alt="musicPhoto" />
    </div>
    <div className={styles.musicInfo}>
      <span className={styles.musicName}>{props.music}</span>
      <span className={styles.artistName}>{props.artist}</span>
    </div>
  </div>
);

export default MusicPhoto;
