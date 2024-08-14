import AlbumsColumn from '../AlbumsColumn/AlbumsColumn';
import TopCharts from '../TopCharts/TopCharts';
import styles from './MusicLibrary.module.scss';

const MusicLibrary = () => {
  return (
    <div className={styles.container}>
      <TopCharts />
      <AlbumsColumn />
    </div>
  );
};

export default MusicLibrary;
