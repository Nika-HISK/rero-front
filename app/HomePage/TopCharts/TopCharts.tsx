import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './TopCharts.module.scss';
import { TopChartsAlbums } from './top-charts-data/top-charts-data';
import AlbumRow from '@/app/Components/AlbumRow/AlbumRow';

const TopCharts = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title={'Top Charts'} link="/topcharts" />
      <div className={styles.container}>
        {TopChartsAlbums.map((album) => (
          <AlbumRow
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
