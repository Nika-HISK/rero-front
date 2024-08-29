import { audioPlayerState } from '@/app/Atoms/states';
import { useRecoilState } from 'recoil';
import songs from '../SmallPlayer/Utils/dummy-musics';
import AudioManager from '../AudioManager/AudioManager';

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
