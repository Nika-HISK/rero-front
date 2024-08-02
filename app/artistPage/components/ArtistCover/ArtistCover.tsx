import styles from './ArtistCover.module.scss';
import Image from 'next/image';

const ArtistCover = () => {
  return (
    <div className={styles.artistCover}>
      <Image src="/kendrika.png" width={628} height={660} alt="artist" />
    </div>
  );
};

export default ArtistCover;
