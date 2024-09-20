'use client';

import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Icon from '../Icons/Icon';
import MediumPlayer from '../MediumPlayer/MediumPlayer';
import SmallPlayer from '../SmallPlayer/SmallPlayer';
import { useAudioPlayer } from '../SmallPlayer/hooks/useAudio.hook';
import { Song } from '../SmallPlayer/interfaces/song-props.interface';
import styles from './AudioManager.module.scss';
import { audioPlayerState } from '@/app/Atoms/states';
import BaseApi from '@/app/api/BaseApi';
import { getCurrentSong } from '@/app/utils/getCurrentSong';

const AudioManager = () => {
  const [open, setOpen] = useState(true);
  const [songs, setSongs] = useState<Song[]>([]);

  const audioPlayer = useRecoilValue(audioPlayerState);
  const currentSong = getCurrentSong(audioPlayer.currentSongId, songs);

  useEffect(() => {
    BaseApi.get('/music').then((response) => {
      setSongs(response.data);
    });
  }, []);

  const audioPlayerControls = useAudioPlayer(songs);

  useEffect(() => {
    document.body.style.overflow = open ? 'auto' : 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <>
      <audio {...audioPlayerControls}></audio>
      <div className={!open ? styles.hidden : styles.notHiddenSmall}>
        <SmallPlayer
          open={open}
          setOpen={setOpen}
          songs={songs}
          {...audioPlayerControls}
        />
      </div>
      <div className={open ? styles.hidden : styles.notHidden}>
        <div
          className={styles.wrapper}
          style={{
            backgroundImage: `url(${currentSong.coverImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        >
          <div className={styles.arrow} onClick={() => setOpen(true)}>
            <Icon name={'arrowdown'} width={18} height={10} />
          </div>
          <div className={styles.container}>
            <MediumPlayer songs={songs} {...audioPlayerControls} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioManager;
