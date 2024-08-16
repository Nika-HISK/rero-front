import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './TopCharts.module.scss';
import { TopChartsAlbums } from './top-charts-data/top-charts-data';
import AlbumRow from '@/app/Components/AlbumRow/AlbumRow';

const TopCharts = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title={'Top Charts'} link="/" />
      <div className={styles.container}>
        {TopChartsAlbums.map((album, index) => (
          <AlbumRow
            key={index}
            albumName={album.albumName}
            duration={album.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
