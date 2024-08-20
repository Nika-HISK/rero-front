import Image from 'next/image';
import styles from './AlbumRowTIme.module.scss';
import { AlbumRowTimePropsInterface } from './albumRowTimePropsInterface/album-row-time-props.inteface';

const AlbumRowTime = (props: AlbumRowTimePropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.musicImage}>
          <Image src={props.src} alt="MusicCover" width={52} height={52} />
        </div>
        <div className={styles.musicInfo}>
          <span className={styles.musicName}>{props.musicName}</span>
          <span>{props.artistName}</span>
        </div>
      </div>
      <div className={styles.albumNameContainer}>
        <span>{props.albumName}</span>
      </div>
      <div>
        <span className={styles.createTime}>{props.createTime}</span>
      </div>
    </div>
  );
};

export default AlbumRowTime;
