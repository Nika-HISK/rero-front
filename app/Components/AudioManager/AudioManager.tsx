'use client';

import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Icon from '../Icons/Icon';
import MediumPlayer from '../MediumPlayer/MediumPlayer';
import SmallPlayer from '../SmallPlayer/SmallPlayer';
import songs from '../SmallPlayer/Utils/dummy-musics';
import { useAudioPlayer } from '../SmallPlayer/hooks/useAudio.hook';
import { SongPropsInterface } from '../SmallPlayer/interfaces/song-props.interface';
import styles from './AudioManager.module.scss';
import { audioPlayerState } from '@/app/Atoms/states';
import { getCurrentSong } from '@/app/utils/getCurrentSong';

const AudioManager = (props: SongPropsInterface) => {
  const audioPlayerControls = useAudioPlayer(songs);
  const [open, setOpen] = useState(true);

  const audioPlayer = useRecoilValue(audioPlayerState);
  const currentSong = getCurrentSong(audioPlayer.currentSongId);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <>
      <div className={!open ? styles.hidden : styles.notHiddenSmall}>
        <SmallPlayer
          open={open}
          setOpen={setOpen}
          songs={props.songs}
          {...audioPlayerControls}
          ref={audioPlayerControls.audioRef}
        />
      </div>
      <div className={open ? styles.hidden : styles.notHidden}>
        <div
          className={styles.wrapper}
          style={{
            backgroundImage: `url(${currentSong.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        >
          <div className={styles.arrow} onClick={() => setOpen(true)}>
            <Icon name={'arrowdown'} width={18} height={10} />
          </div>
          <div className={styles.container}>
            <MediumPlayer songs={props.songs} {...audioPlayerControls} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioManager;
