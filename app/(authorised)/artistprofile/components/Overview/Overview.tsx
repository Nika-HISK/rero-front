import styles from './Overview.module.scss';
import { overviewData } from './overview-dummy-data';
import AlbumRow from '@/app/Components/AlbumRow/AlbumRow';

const Overview = () => {
  return (
    <>
      <div className={styles.overview}>
        <span>Overview</span>
      </div>
      <div className={styles.timeContainer}>
        {overviewData.map((album, index) => (
          <AlbumRow
            key={index}
            albumName={album.albumName}
            duration={album.duration}
          />
        ))}
      </div>
    </>
  );
};

export default Overview;
