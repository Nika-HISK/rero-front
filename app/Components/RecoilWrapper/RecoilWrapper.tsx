'use client';

import { ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import AudioManager from '../AudioManager/AudioManager';
import songs from '../SmallPlayer/Utils/dummy-musics';
import { currentSongIndexState } from '@/app/Atoms/states';

const RecoilWrapper = (props: { children: ReactNode }) => {
  const [currentSong] = useRecoilState(currentSongIndexState);
  const selectedSongs = currentSong !== null ? [songs[currentSong]] : [];

  return (
    <>
      {props.children}
      {selectedSongs.length > 0 && <AudioManager songs={selectedSongs} />}
    </>
  );
};

export default RecoilWrapper;
