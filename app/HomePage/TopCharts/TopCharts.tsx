import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './TopCharts.module.scss';
import { TopChartsAlbums } from './top-charts-data/top-charts-data';
import MusicRow from '@/app/Components/MusicRow/MusicRow';

const TopCharts = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="Top Charts" link="/topcharts" />
      <div className={styles.container}>
        {TopChartsAlbums.map((album) => (
          <MusicRow
            key={album.id}
            albumName={album.albumName}
            duration={album.duration}
            cover={album.cover}
            music={album.music}
            artistName={album.artistName}
            id={album.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
