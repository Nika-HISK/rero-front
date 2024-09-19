'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { artistData } from '@/app/(authorised)/playlist/interface/artist-data.interface';
import TopAlbumsNavigationAnchore from '@/app/(authorized)/topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import Button from '@/app/Components/Button/Button';
import ConfirmPopup from '@/app/Components/ConfirmPopup/ConfirmPopup';
import Icon from '@/app/Components/Icons/Icon';
import PlayList from '@/app/Components/PlayList/PlayList';
import PlaylistPopup from '@/app/Components/PlaylistPopup/PlaylistPopup';
import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';
import BaseApi from '@/app/api/BaseApi';

const PlaylistPage = () => {
  const [active, setActive] = useState<boolean>(false);
  const [artists, setArtists] = useState<artistData[]>([]);
  const [isVisiblePopUp, setIsVisiblePopUp] = useState<boolean>(false);
  const [selectedArtistId, setSelectedArtistId] = useState<number | null>(null);
  const [isActiveAddIcon, setIsActiveAddIcon] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const fetchData = async () => {
    try {
      const response = await BaseApi.get('/playlist');
      setArtists(response.data);``
    } catch (error) {
      alert('Failed to fetch playlist data.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  const handleDeleteClick = (id: number) => {
    setSelectedArtistId(id);
    setIsVisiblePopUp(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedArtistId !== null) {
      try {
        await BaseApi.delete(`/playlist/${selectedArtistId}`);
        fetchData();
      } catch (error) {
        alert('Failed to delete playlist.');
      }
      setIsVisiblePopUp(false);
      setSelectedArtistId(null);
    }
  };

  const handleCancelDelete = () => {
    setIsVisiblePopUp(false);
    setSelectedArtistId(null);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.navWrapper}>
          <TopAlbumsNavigationAnchore />
        </div>
        <div className={styles.iconsWrapper}>
          <Icon
            name="plus"
            width={18}
            height={18}
            onClick={() => setIsActiveAddIcon(true)}
          />
          <div className={styles.editIconWrapper} onClick={handleClick}>
            <Icon name="edit" width={18} height={18} />
          </div>
        </div>
      </div>

      <div className={styles.collapseWrapper}>
        {artists.map(
          ({ playlistName, id: ID, musics }: artistData, index: number) => (
            <div key={index} className={styles.playlistWrapper}>
              <PlayList
                playlistName={playlistName}
                isActive={active}
                setActive={handleClick}
                key={index + 1}
                artists={musics}
                loop={false}
                toggleLoop={() => { }}
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
          message="Are you sure you want to delete this playlist?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

      {isActiveAddIcon && (
        <PlaylistPopup
          onCancel={() => setIsActiveAddIcon(false)}
          onConfirm={() => {
            const existingFile = artists.find(
              ({ playlistName }: artistData) => playlistName === value,
            );
            if (existingFile) {
              alert('Playlist with that name already exists');
              return;
            }

            const postData = async () => {
              try {
                await BaseApi.post('/playlist', {
                  playlistName: value,
                  musics: [],
                });
                fetchData();
              }
              catch (error) {
                alert('Failed to create playlist.');
              }
            };
            postData();
            setIsActiveAddIcon(false);
          }}
          e={setValue}
          data={[]}
        />
      )}
    </>
  );
};

export default PlaylistPage;
