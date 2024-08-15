import Image from 'next/image';
import styles from './ArtistCover.module.scss';
import { ArtistCoverPropsInterface } from './interfaces/artist-cover-props.interface';

const ArtistCover = (props: ArtistCoverPropsInterface) => {
  return (
    <div className={styles.artistCover}>
      <Image src={props.cover} width={628} height={660} alt="artist" />
    </div>
  );
};

export default ArtistCover;
