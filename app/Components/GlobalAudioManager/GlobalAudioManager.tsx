import { useRecoilState } from 'recoil';
import AudioManager from '../AudioManager/AudioManager';
import songs from '../SmallPlayer/Utils/dummy-musics';
import { audioPlayerState } from '@/app/Atoms/states';

const GlobalAudioManager = () => {
  const [audioPlayer] = useRecoilState(audioPlayerState);
  const selectedSongs =
    audioPlayer.currentSongId !== null
      ? [songs[audioPlayer.currentSongId]]
      : [];

  return (
    <>{selectedSongs.length > 0 && <AudioManager songs={selectedSongs} />}</>
  );
};

export default GlobalAudioManager;
