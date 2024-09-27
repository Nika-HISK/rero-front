import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MusicRowImage from '../MusicRow/components/MusicRowImage/MusicRowImage';
import SelectPlaylistPopUp from '../SelectPlaylistPopUp/SelectPlaylistPopUp';
import styles from './PlaylistMusic.module.scss';
import BaseApi from '@/app/api/BaseApi';

interface PlaylistMusicProps {
  id: number;
  albumName: string | undefined;
  duration: string | null;
  coverImage: string;
  music: string;
  artistName: string;
  musicAudio: string;
  isPlaying: boolean;
  onClick: () => void;
  albumId: number;
}

const PlayListMusic = (props: PlaylistMusicProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const router = usePathname();

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

  const handlePlusClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleTrashClick = async (
    event: React.MouseEvent<HTMLImageElement>,
  ) => {
    event.stopPropagation();
    try {
      await BaseApi.delete(`/playlist/${props.albumId}/add/${props.id}`);
      setIsDeleted(true);
    } catch (error) {
      alert('Error deleting song from playlist');
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.wrapper} onClick={handlePlayClick}>
        <MusicRowImage
          cover={props.coverImage}
          music={props.music}
          artist={props.artistName}
        />
        <p>{props.albumName}</p>
        <div className={styles.container}>
          <p>{props.duration ? props.duration : 'N/A'}</p>
          {router !== '/playlist' && (
            <div className={styles.plus} onClick={handlePlusClick}></div>
          )}
        </div>
        <Image
          src={'/icons/trash.svg'}
          alt="trash"
          width={40}
          height={40}
          onClick={handleTrashClick}
        />
      </div>
      {open && (
        <SelectPlaylistPopUp option={open} setOpen={setOpen} id={props.id} />
      )}
    </div>
  );
};

export default PlayListMusic;
