'use client';

import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import AudioManager from '../AudioManager/AudioManager';
import songs from '../SmallPlayer/Utils/dummy-musics';
import { audioPlayerState } from '@/app/Atoms/states';

const RecoilWrapper = (props: { children: ReactNode }) => {
  const [audioPlayer] = useRecoilState(audioPlayerState);
  const selectedSongs =
    audioPlayer.currentSongIndex !== null
      ? [songs[audioPlayer.currentSongIndex]]
      : [];

  return (
    <>
      {props.children}
      {selectedSongs.length > 0 && <AudioManager songs={selectedSongs} />}
    </>
  );
};

export default RecoilWrapper;
