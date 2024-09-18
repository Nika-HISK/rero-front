/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { RowAlbumSectionPropsInterface } from '../RowAlbumSection/interfaces/row-album-section-props.interface';
import styles from './Overview.module.scss';
import MusicRow from '@/app/Components/MusicRow/MusicRow';

const Overview = (props: RowAlbumSectionPropsInterface) => {
  return (
    <>
      <div className={styles.overview}>
        <span>Overview</span>
      </div>
      <div className={styles.timeContainer}>
        {props.albums.slice(0, 4).map((album) => {
          return (
            <MusicRow
              id={album.id}
              key={album.id}
              duration={album.duration}
              albumName={album.album?.name!}
              coverImage={album.coverImage}
              music={album.name}
              artistName={album.artist?.artistName!}
            />
          );
        })}
      </div>
    </>
  );
};

export default Overview;
