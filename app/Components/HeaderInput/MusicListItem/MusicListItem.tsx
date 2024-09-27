import Image from 'next/image';
import React from 'react';
import { MusicRowPropsInterface } from '../../MusicRow/interfaces/music-row-props.interface';
import styles from './MusicListItem.module.scss';
import BaseApi from '@/app/api/BaseApi';

const MusicListItem: React.FC<MusicRowPropsInterface> = (props) => {
  const handlePlayClick = async () => {
    try {
      await BaseApi.post(`/listeners/${props.id}`);
    } catch (error) {
      alert('Error posting listener count:');
    }

    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <li className={styles.musicLiStyle} onClick={handlePlayClick}>
      <Image src="/search.png" alt="music" width={20} height={20} />
      <p className={styles.musicParagraphStyle}>
        <span className={styles.musicStyle}>Music: </span>
        {props.music}
      </p>
    </li>
  );
};

export default MusicListItem;
