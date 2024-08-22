import React, { useState } from 'react';
import { useAudioPlayer } from '../SmallPlayer/hooks/useAudio.hook';
import { SongPropsInterface } from '../SmallPlayer/interfaces/song-props.interface';
import SmallPlayer from '../SmallPlayer/SmallPlayer';
import songs from '../SmallPlayer/Utils/dummy-musics';
import styles from './Manager.module.scss';
import PlayerFullScreen from '../PlayerFullScreen/PlayerFullScreen';
import MediumPlayer from '../MediumPlayer/MediumPlayer';
import Icon from '../Icons/Icon';

const AudioManager = (props: SongPropsInterface) => {
  
  const audioPlayerControls = useAudioPlayer(props.songs);
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className={!open ? styles.hidden : styles.notHidfdden}>
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
            backgroundImage: `url(/playerbackground.png)`,
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
