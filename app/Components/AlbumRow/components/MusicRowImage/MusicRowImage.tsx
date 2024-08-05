import Image from 'next/image';
import styles from './MusicRowImage.module.scss';
import { MusicRowPhotoPropsInterface } from './interfaces/music-row-image-props.interface';

const MusicRowPhoto = (props: MusicRowPhotoPropsInterface) => {
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
