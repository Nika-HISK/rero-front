import RowAlbum from '@/app/Components/RowAlbum/RowAlbum';
import styles from './Overview.module.scss';
import { overviewData } from './overview-dummy-data';

const Overview = () => {
  return (
    <>
      <div className={styles.overview}>
        <span>Overview</span>
      </div>
      <div className={styles.timeContainer}>
        {overviewData.map((album, index) => (
          <RowAlbum
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
