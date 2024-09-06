'use client';

import styles from './MusicRow.module.scss';
import { useState } from 'react';
import MusicRowImage from './components/MusicRowImage/MusicRowImage';
import SelectPlaylistPopUp from '../SelectPlaylistPopUp/SelectPlaylistPopUp';
import { MusicRowPropsInterface } from './interfaces/music-row-props.interface';

const AlbumRow = (props: MusicRowPropsInterface) => {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.wrapper} onClick={props.onRowAlbumClick}>
        <MusicRowImage
          cover={props.cover}
          music={props.music}
          artist={props.artistName}
        />
        <p>{props.albumName}</p>
        <div className={styles.container}>
          <p>{props.duration}</p>
          <div className={styles.plus} onClick={() => setOpen(true)} ></div>
        </div>
      </div>
      {open &&
        <SelectPlaylistPopUp option={open} value={setOpen} />
      }
    </div>
  );
};

export default AlbumRow;
