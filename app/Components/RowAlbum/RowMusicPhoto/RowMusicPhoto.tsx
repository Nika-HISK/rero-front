import Image from 'next/image';
import styles from './RowMusicPhoto.module.scss';

interface RowMusicPhotoProps {
  cover: string;
  artist: string;
  music: string;
}

const RowMusicPhoto = (props: RowMusicPhotoProps) => {
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

export default RowMusicPhoto;
