import { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Song } from '../interfaces/song-props.interface';
import { audioPlayerState } from '@/app/Atoms/states';
import { getCurrentSong } from '@/app/utils/getCurrentSong';

export const useAudioPlayer = (songs: Song[]) => {
  const [audioPlayer, setAudioPlayer] = useRecoilState(audioPlayerState);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);
  const currentSong = getCurrentSong(audioPlayer.currentSongId, songs);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (!audioRef.current) return;

      setAudioPlayer((prev) => ({
        ...prev,
        currentTime: audioRef.current!.currentTime,
      }));
      const progressValue = String(
        (audioRef.current.currentTime / audioRef.current.duration) * 100,
      );
      if (progressRef.current) progressRef.current.value = progressValue;
    };

    const handleLoadedMetadata = () => {
      if (!audioRef.current) return;

      setAudioPlayer((prev) => ({
        ...prev,
        duration: audioRef.current!.duration,
      }));
    };

    const handleEnded = () => {
      setAudioPlayer((prev) => {
        if (prev.currentSongId === null) return prev;

        let nextSongId;

        if (prev.shuffle) {
          const remainingSongs = songs.filter(
            (song) => song.id !== prev.currentSongId,
          );
          const randomSong =
            remainingSongs[Math.floor(Math.random() * remainingSongs.length)];
          nextSongId = randomSong.id;
        } else {
          nextSongId = (prev.currentSongId + 1) % songs.length;
        }

        return {
          ...prev,
          currentSongId: nextSongId,
          currentTime: 0,
        };
      });
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
  }, [audioPlayer.currentSongId, songs.length, setAudioPlayer, songs]);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.load();
    setAudioPlayer((prev) => ({ ...prev, currentTime: 0, duration: 0 }));
  }, [audioPlayer.currentSongId, setAudioPlayer]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src = currentSong.musicAudio;
    audioRef.current.play();
  }, [audioPlayer.currentSongId, currentSong.musicAudio]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.play();
  }, []);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;

    const newTime = (e.target.valueAsNumber / 100) * audioPlayer.duration;
    audioRef.current.currentTime = newTime;
    setAudioPlayer((prev) => ({ ...prev, currentTime: newTime }));
  };

  const playMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const handleTenSecondsBack = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime -= 10;
    setAudioPlayer((prev) => ({
      ...prev,
      currentTime: audioRef.current!.currentTime,
    }));
  };

  const handleNextSong = () => {
    if (!audioRef.current) return;

    setAudioPlayer((prev) => {
      if (prev.currentSongId === null) return prev;

      let nextSongId;

      if (prev.shuffle) {
        const remainingSongs = songs.filter(
          (song) => song.id !== prev.currentSongId,
        );
        const randomSong =
          remainingSongs[Math.floor(Math.random() * remainingSongs.length)];
        nextSongId = randomSong.id;
      } else {
        const currentIndex = songs.findIndex(
          (song) => song.id === prev.currentSongId,
        );
        nextSongId =
          currentIndex === songs.length - 1
            ? songs[0].id
            : songs[currentIndex + 1].id;
      }

      return {
        ...prev,
        currentSongId: nextSongId,
        currentTime: 0,
        duration: 0,
      };
    });
  };

  const handlePreviousSong = () => {
    if (!audioRef.current) return;

    setAudioPlayer((prev) => {
      if (prev.currentSongId === null) return prev;

      let prevSongId;

      if (prev.shuffle) {
        const remainingSongs = songs.filter(
          (song) => song.id !== prev.currentSongId,
        );
        const randomSong =
          remainingSongs[Math.floor(Math.random() * remainingSongs.length)];
        prevSongId = randomSong.id;
      } else {
        const currentIndex = songs.findIndex(
          (song) => song.id === prev.currentSongId,
        );
        prevSongId =
          currentIndex === 0
            ? songs[songs.length - 1].id
            : songs[currentIndex - 1].id;
      }

      return {
        ...prev,
        currentSongId: prevSongId,
        currentTime: 0,
        duration: 0,
      };
    });
  };

  const handleVolumeDown = () => {
    if (!audioRef.current) return;

    audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.2);
  };

  const handleVolumeUp = () => {
    if (!audioRef.current) return;

    audioRef.current.volume = Math.min(1, audioRef.current.volume + 0.2);
  };

  const toggleLoop = () => {
    setAudioPlayer((prev) => ({ ...prev, loop: !prev.loop }));
    if (!audioRef.current) return;

    audioRef.current.loop = !audioRef.current.loop;
  };

  const Shuffle = (songs: Song[]) => {
    let currentIndex = songs.length;
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [songs[currentIndex], songs[randomIndex]] = [
        songs[randomIndex],
        songs[currentIndex],
      ];
    }
  };

  const isPlaying = !!audioRef.current?.paused;

  return {
    ref: audioRef,
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
    Shuffle,
  };
};
