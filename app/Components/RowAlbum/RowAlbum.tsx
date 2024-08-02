import styles from './RowAlbum.module.scss';
import Image from 'next/image';
import RowMusicPhoto from './RowMusicPhoto/RowMusicPhoto';

interface Props {
  albumName: string;
  duration: String;
  onPlusClick?: () => void;
  onRowAlbumClick?: () => void;
}

const RowAlbum = (props: Props) => {
  return (
    <div className={styles.wrapper} onClick={props.onRowAlbumClick}>
      <RowMusicPhoto
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
  );
};

export default RowAlbum;
