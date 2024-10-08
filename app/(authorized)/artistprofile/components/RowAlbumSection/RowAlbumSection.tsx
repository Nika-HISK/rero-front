/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useRecoilState } from 'recoil';
import styles from './RowAlbumSection.module.scss';
import { RowAlbumSectionPropsInterface } from './interfaces/row-album-section-props.interface';
import { SongsState, audioPlayerState } from '@/app/Atoms/states';
import MusicRow from '@/app/Components/MusicRow/MusicRow';
import BaseApi from '@/app/api/BaseApi';

const RowAlbumSection = (props: RowAlbumSectionPropsInterface) => {
  const [currentSong, setCurrentSong] = useRecoilState(audioPlayerState);
  const [, setSongs] = useRecoilState(SongsState);

  const handlePlayClick = async (id: number) => {
    try {
      await BaseApi.post(`/listeners/${id}`);
      setSongs(props.albums);
    } catch (error) {
      alert(error);
    }

    setCurrentSong((prevState) => ({
      ...prevState,
      currentSongId: id,
    }));
  };

  return (
    <div className={styles.topMusicContainer}>
      <div className={styles.topMusicWrapper}>
        {props.albums.map((album) => (
          <MusicRow
            key={album.id}
            id={album.id}
            duration={album.duration}
            albumName={album.album?.name!}
            coverImage={album.coverImage}
            music={album.name}
            artistName={album.artist?.artistName!}
            musicAudio={album.musicAudio!}
            isPlaying={currentSong.currentSongId === album.id}
            onClick={() => handlePlayClick(album.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default RowAlbumSection;
