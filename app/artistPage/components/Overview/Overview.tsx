import RowAlbum from '@/app/Components/RowAlbum/RowAlbum';
import styles from './Overview.module.scss';

const Overview = () => {
  return (
    <>
      <div className={styles.overview}>
        <span>Overview</span>
      </div>
      <div className={styles.timeContainer}>
        <RowAlbum albumName={'zdddddddd'} duration={'3:33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3:33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3:33'} />
        <RowAlbum albumName={'zdddddddd'} duration={'3:33'} />
      </div>
    </>
  );
};

export default Overview;
