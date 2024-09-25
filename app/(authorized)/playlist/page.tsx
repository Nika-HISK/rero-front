'use client';

import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Editpopup from './components/Editpopup';
import { PlaylistData } from './interface /playlist-interface';

import styles from './page.module.scss';
import TopAlbumsNavigationAnchore from '@/app/(authorized)/topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import { audioPlayerState } from '@/app/Atoms/states';
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
  const [artists, setArtists] = useState<PlaylistData[]>([]);
  const [isVisiblePopUp, setIsVisiblePopUp] = useState<boolean>(false);
  const [selectedArtistId, setSelectedArtistId] = useState<number | null>(null);
  const [isActiveAddIcon, setIsActiveAddIcon] = useState<boolean>(false);
  const [playlistName, setPlaylistName] = useState<string>('');
  const [editActive, setEditActive] = useState<boolean>(false);
  const [editPlaylistId, setEditPlaylistId] = useState<number | null>(null);
  const audioPlayer = useRecoilValue(audioPlayerState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await BaseApi.get('/playlist');
      setArtists(response.data);
    } catch (error) {
      alert('Could not fetch playlist data');
    }
  };

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

  const handleConfirmEdit = async () => {
    if (editPlaylistId !== null) {
      try {
        await BaseApi.put(`/playlist/${editPlaylistId}`, {
          playlistName: playlistName,
        });
        fetchData();
        setEditActive(false);
      } catch (error) {
        alert('Sorry, we are not able to change the playlist name');
      }
    }
  };

  const handleEditClick = (id: number, currentPlaylistName: string) => {
    setPlaylistName(currentPlaylistName);
    setEditPlaylistId(id);
    setEditActive(true);
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
          <div className={styles.trashIconWrapper} onClick={handleClick}>
            <Icon name="trash" width={18} height={18} />
          </div>
          {editActive && (
            <div className={styles.editIconWrapper}>
              <Icon name="edit" width={18} height={18} />
            </div>
          )}
        </div>
      </div>

      <div className={styles.collapseWrapper}>
        {artists.map(
          ({ playlistName, id: ID, musics }: PlaylistData, index: number) => (
            <div key={index} className={styles.playlistWrapper}>
              <PlayList
                playlistId={ID}
                playlistName={playlistName}
                isActive={active}
                setActive={handleClick}
                key={index + 1}
                artists={musics}
                loop={audioPlayer.loop}
                artistName={''}
                artistPhoto={''}
                musicName={''}
                toggleLoop={() => ''}
                onClick={() => handleEditClick(ID, playlistName)}
              />
              {active && (
                <div className={styles.garbageButtonWrapper}>
                  <Button
                    mode={ButtonMode.Delete}
                    type={ButtonType.IconOnly}
                    onClick={() => handleDeleteClick(ID)}
                    icon="/icons/trash.svg"
                  />
                </div>
              )}
              {editActive && editPlaylistId === ID && (
                <Editpopup
                  e={setPlaylistName}
                  onCancel={() => setEditActive(false)}
                  onConfirm={handleConfirmEdit}
                />
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
              ({ playlistName }: PlaylistData) => playlistName === playlistName,
            );
            if (existingFile) {
              alert('Playlist with that name already exists');
              return;
            }

            const postData = async () => {
              try {
                await BaseApi.post('/playlist', {
                  playlistName: playlistName,
                  musics: [],
                });
                fetchData();
              } catch (error) {
                alert('Failed to create playlist.');
              }
            };
            postData();
            setIsActiveAddIcon(false);
          }}
          e={setPlaylistName}
        />
      )}
    </>
  );
};

export default PlaylistPage;
