import { useRecoilState } from 'recoil';
import AudioManager from '../AudioManager/AudioManager';
import { audioPlayerState } from '@/app/Atoms/states';

const GlobalAudioManager = () => {
  const [audioPlayer] = useRecoilState(audioPlayerState);

  return <>{audioPlayer.currentSongId && <AudioManager />}</>;
};

export default GlobalAudioManager;
