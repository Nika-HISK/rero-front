'use client';

import { useRecoilValue } from 'recoil';
import ArrowLink from './Components/Arrow/Arrow';
import MusicPhoto from './Components/MusicPhoto/MusicPhoto';
import Player from './Components/Player/Player';
import styles from './SmallPlayer.module.scss';
import { SmallPlayerPropsInterface } from './interfaces/small-player-props.interace';
import { audioPlayerState } from '@/app/Atoms/states';
import { getCurrentSong } from '@/app/utils/getCurrentSong';

const SmallPlayer = (props: SmallPlayerPropsInterface) => {
  const audioPlayer = useRecoilValue(audioPlayerState);
  const currentSong = getCurrentSong(audioPlayer.currentSongId, props.songs);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <MusicPhoto
          src={currentSong.coverImage}
          music={currentSong.name}
          artist={currentSong.artist.artistName}
        />
        <Player
          playing={props.isPlaying}
          currentTime={audioPlayer.currentTime}
          duration={audioPlayer.duration}
          progressRef={props.progressRef}
          onProgressChange={props.handleProgressChange}
          onTenSecondsBack={props.handleTenSecondsBack}
          onVolumeDown={props.handleVolumeDown}
          onVolumeUp={props.handleVolumeUp}
          onPreviousSong={props.handlePreviousSong}
          onNextSong={props.handleNextSong}
          onPlayMusic={props.playMusic}
          mute={props.mute}
        />
        <div
          onClick={() => props.setOpen(!props.open)}
          className={styles.arrowContainer}
        >
          <ArrowLink />
        </div>
      </div>
    </div>
  );
};

SmallPlayer.displayName = 'SmallPlayer';

export default SmallPlayer;
