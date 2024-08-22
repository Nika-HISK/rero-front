import { useState, useEffect, useRef } from 'react';
import Header from '../Header/Header';
import Icon from '../Icons/Icon';
import MediumPlayer from '../MediumPlayer/MediumPlayer';
import SmallPlayer from '../SmallPlayer/SmallPlayer';
import { useAudioPlayer } from '../SmallPlayer/hooks/useAudio.hook';
import { SongPropsInterface } from '../SmallPlayer/interfaces/song-props.interface';
import styles from './AudioManager.module.scss';

const AudioManager = (props: SongPropsInterface) => {
  const audioPlayerControls = useAudioPlayer(props.songs);
  const [open, setOpen] = useState(true);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(true);
      }
    };

    if (!open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const currentSong = props.songs[audioPlayerControls.audioPlayer.currentSongIndex];

  return (
    <>
      {!open && <Header isFixed={!open} />}
      <div className={!open ? styles.hidden : styles.notHiddenSmall}>
        <SmallPlayer
          open={open}
          setOpen={setOpen}
          songs={props.songs}
          {...audioPlayerControls}
        />
      </div>
      <div
        className={open ? styles.hidden : styles.notHidden}
      >
        <div
          className={styles.wrapper}
          ref={wrapperRef}
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
