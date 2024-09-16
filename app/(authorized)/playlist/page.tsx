'use client';

import { useState } from 'react';
import { artistInfo, artistData } from './dummyData/dummyData';
import styles from './page.module.scss';
import TopAlbumsNavigationAnchore from '@/app/(authorized)/topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import Button from '@/app/Components/Button/Button';
import ConfirmPopup from '@/app/Components/ConfirmPopup/ConfirmPopup';
import Icon from '@/app/Components/Icons/Icon';
import PlayList from '@/app/Components/PlayList/PlayList';
import PlaylistPopup from '@/app/Components/PlaylistPopup/PlaylistPopup';
import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';

const PlaylistPage = () => {
  const [active, setActive] = useState<boolean>(false);
  const [artists, setArtists] = useState<artistData[]>([...artistInfo]);
  const [isVisiblePopUp, setIsVisiblePopUp] = useState<boolean>(false);
  const [selectedArtistId, setSelectedArtistId] = useState<number | null>(null);
  const [isActiveAddIcon, setIsActiveAddIcon] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleClick = () => {
    setActive(!active);
  };

  const handleDeleteClick = (id: number) => {
    setSelectedArtistId(id);
    setIsVisiblePopUp(true);
  };

  const handleConfirmDelete = () => {
    if (selectedArtistId !== null) {
      updatedArtitstData(selectedArtistId);
    }
    setIsVisiblePopUp(false);
  };

  const handleCancelDelete = () => {
    setIsVisiblePopUp(false);
    setSelectedArtistId(null);
  };

  const updatedArtitstData = (id: number) => {
    const updatedArtists: artistData[] = artists.filter(
      ({ id: ID }: artistData) => ID !== id,
    );
    setArtists(updatedArtists);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.navWrapper}>
          <TopAlbumsNavigationAnchore />
        </div>
        <div className={styles.iconsWrapper}>
          <Icon
            name={'plus'}
            width={18}
            height={18}
            onClick={() => {
              setIsActiveAddIcon(true);
            }}
          />
          <div className={styles.editIconWrapper} onClick={handleClick}>
            <Icon name={'edit'} width={18} height={18} />
          </div>
        </div>
      </div>
      <div className={styles.collapseWrapper}>
        {artists.map(
          (
            { playlistName, artistPhoto, id: ID, songs }: artistData,
            index: number,
          ) => (
            <div key={index} className={styles.playlistWrapper}>
              <PlayList
                playlistName={playlistName}
                artistPhoto={`/artists/${artistPhoto}`}
                isActive={active}
                setActive={handleClick}
                key={index + 1}
                artists={songs}
                artistName={''}
                musicName={''}
              />
              {active && (
                <div className={styles.garbageButtonWrapper}>
                  <Button
                    mode={ButtonMode.Delete}
                    type={ButtonType.IconOnly}
                    onClick={() => handleDeleteClick(ID)}
                    icon="/icons/group.svg"
                  />
                </div>
              )}
            </div>
          ),
        )}
      </div>
      {isVisiblePopUp && (
        <ConfirmPopup
          message="Are you sure ?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
      {isActiveAddIcon && (
        <>
          <PlaylistPopup
            onCancel={() => {
              setIsActiveAddIcon(false);
            }}
            onConfirm={() => {
              const existingFile = artists.find(
                ({ playlistName }: artistData) => playlistName === value,
              );
              if (existingFile) {
                alert('Playlist with that name is already exists');
                return;
              }
              const updatedArtistsData = {
                playlistName: `${value}`,
                artistPhoto: 'playlist.jpg',
                id: artists.length + 1,
                songs: [
                  {
                    src: '/2pac.jpg',
                    musicName: 'Song 1',
                    artistName: 'Artist 1',
                    albumName: 'Album 1',
                    createTime: '3:45',
                  },
                  {
                    src: '/2pac.jpg',
                    musicName: 'Song 1',
                    artistName: 'Artist 1',
                    albumName: 'Album 1',
                    createTime: '3:45',
                  },
                ],
              };
              setArtists([updatedArtistsData, ...artists]);
              setIsActiveAddIcon(false);
            }}
            e={setValue}
            data={artistInfo}
          />
        </>
      )}
    </>
  );
};

export default PlaylistPage;
