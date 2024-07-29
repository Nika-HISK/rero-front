import Image from 'next/image';
import styles from './MusicRowPhoto.module.scss';
import { RowMusicPhotoPropsInterface } from './interfaces/row-music-photo-props.interface';

const MusicRowPhoto = (props: RowMusicPhotoPropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.coverImage}>
        <Image src={props.cover} width={60} height={60} alt="artistPhoto" />
      </div>
      <div className={styles.container}>
        <span className={styles.music}>{props.music}</span>
        <span className={styles.artist}>{props.artist}</span>
      </div>
    </div>
  );
};

export default MusicRowPhoto;
