import { useAudioPlayer } from '../SmallPlayer/hooks/useAudio.hook';
import { SongPropsInterface } from '../SmallPlayer/interfaces/song-props.interface';

const AudioRef = (props: SongPropsInterface) => {
  const { audioRef, audioPlayer } = useAudioPlayer(props.songs);
  return (
    <audio
      ref={audioRef}
      src={props.songs[audioPlayer.currentSongIndex].audioSrc}
      loop={audioPlayer.loop}
    ></audio>
  );
};

export default AudioRef;
