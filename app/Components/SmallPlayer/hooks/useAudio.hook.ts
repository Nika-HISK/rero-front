import { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Song } from '../interfaces/song-props.interface';
import { audioPlayerState } from '@/app/Atoms/states';

export const useAudioPlayer = (songs: Song[]) => {
  const [audioPlayer, setAudioPlayer] = useRecoilState(audioPlayerState);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (!audioRef.current) {
        return;
      }
      if (audioRef.current) {
        setAudioPlayer((prev) => ({
          ...prev,
          currentTime: audioRef.current!.currentTime,
        }));
        const progressValue = String(
          (audioRef.current.currentTime / audioRef.current.duration) * 100,
        );
        if (progressRef.current) progressRef.current.value = progressValue;
      }
    };

    const handleLoadedMetadata = () => {
      if (!audioRef.current) {
        return;
      }
      if (audioRef.current) {
        setAudioPlayer((prev) => ({
          ...prev,
          duration: audioRef.current!.duration,
        }));
      }
    };

    const handleEnded = () => {
      setAudioPlayer((prev) => ({
        ...prev,
        currentSongIndex: (prev.currentSongIndex + 1) % songs.length,
        currentTime: 0,
      }));
    };

    if (audioRef.current) {
      const audio = audioRef.current;
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('ended', handleEnded);
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [audioPlayer.currentSongIndex, songs.length, setAudioPlayer]);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setAudioPlayer((prev) => ({ ...prev, currentTime: 0, duration: 0 }));
    }
  }, [audioPlayer.currentSongIndex, setAudioPlayer]);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [audioPlayer.currentSongIndex]);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) {
      return;
    }
    if (audioRef.current) {
      const newTime = (e.target.valueAsNumber / 100) * audioPlayer.duration;
      audioRef.current.currentTime = newTime;
      setAudioPlayer((prev) => ({ ...prev, currentTime: newTime }));
    }
  };

  const playMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  const handleTenSecondsBack = () => {
    if (!audioRef.current) {
      return;
    }
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
      setAudioPlayer((prev) => ({
        ...prev,
        currentTime: audioRef.current!.currentTime,
      }));
    }
  };

  const handleNextSong = () => {
    if (!audioRef.current) {
      return;
    }
    if (audioPlayer.loop && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      setAudioPlayer((prev) => ({
        ...prev,
        currentSongIndex: (prev.currentSongIndex + 1) % songs.length,
        currentTime: 0,
        duration: 0,
      }));
    }
  };

  const handlePreviousSong = () => {
    if (!audioRef.current) {
      return;
    }
    if (audioPlayer.loop && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      setAudioPlayer((prev) => ({
        ...prev,
        currentSongIndex:
          (prev.currentSongIndex - 1 + songs.length) % songs.length,
        currentTime: 0,
        duration: 0,
      }));
    }
  };

  const handleVolumeDown = () => {
    if (!audioRef.current) {
      return;
    }
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.2);
    }
  };

  const handleVolumeUp = () => {
    if (!audioRef.current) {
      return;
    }
    if (audioRef.current) {
      audioRef.current.volume = Math.min(1, audioRef.current.volume + 0.2);
    }
  };

  const toggleLoop = () => {
    setAudioPlayer((prev) => ({ ...prev, loop: !prev.loop }));
    if (!audioRef.current) {
      return;
    }
    if (audioRef.current) {
      audioRef.current.loop = !audioRef.current.loop;
    }
  };

  const isPlaying = !!audioRef.current?.paused;

  return {
    audioRef,
    progressRef,
    audioPlayer,
    handleProgressChange,
    playMusic,
    handleTenSecondsBack,
    handleNextSong,
    handlePreviousSong,
    handleVolumeDown,
    handleVolumeUp,
    toggleLoop,
    isPlaying,
  };
};
