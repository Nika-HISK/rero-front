import  { useState, useEffect } from 'react';
import { useAudioPlayer } from '../SmallPlayer/hooks/useAudio.hook';
import { SongPropsInterface } from '../SmallPlayer/interfaces/song-props.interface';
import SmallPlayer from '../SmallPlayer/SmallPlayer';
import styles from './Manager.module.scss';
import MediumPlayer from '../MediumPlayer/MediumPlayer';
import Icon from '../Icons/Icon';
  
const AudioManager = (props: SongPropsInterface) => {
  const audioPlayerControls = useAudioPlayer(props.songs);
  const [open, setOpen] = useState(true);

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

  const currentSong =
    props.songs[audioPlayerControls.audioPlayer.currentSongIndex];

  return (
    <>
      <div className={!open ? styles.hidden : styles.notHiddenSmall}>
        <SmallPlayer
          open={open}
          setOpen={setOpen}
          songs={props.songs}
          {...audioPlayerControls}
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
