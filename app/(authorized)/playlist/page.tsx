'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Editpopup from './components/Editpopup';
import { PlaylistData } from './interface/playlist-interface';
import styles from './page.module.scss';
import TopAlbumsNavigationAnchore from '@/app/(authorized)/topalbums/components/TopAlbumsNavigationAnchore/TopAlbumsNavigationAnchore';
import { SongsState, audioPlayerState } from '@/app/Atoms/states';
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
  const [currentSong, setCurrentSong] = useRecoilState(audioPlayerState);
  const [songs, setSongs] = useRecoilState(SongsState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await BaseApi.get('/user/me');
      setArtists(response.data.playlists);
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
        await BaseApi.put(`/playlist/${editPlaylistId}`, { playlistName });
        fetchData();
        setEditActive(false);
      } catch (error) {
        alert('Failed to edit playlist name');
      }
    }
  };

  const handleEditClick = (id: number, currentPlaylistName: string) => {
    setPlaylistName(currentPlaylistName);
    setEditPlaylistId(id);
    setEditActive(true);
  };

  const handlePlayClick = async (id: number) => {
    try {
      await BaseApi.post(`/listeners/${id}`);
      setCurrentSong((prevState) => ({
        ...prevState,
        currentSongId: id,
      }));
    } catch (error) {
      alert('Failed to play the song.');
    }
  };

  const handleAddPlaylist = async () => {
    if (artists.some((artist) => artist.playlistName === playlistName)) {
      alert('Playlist with that name already exists');
      return;
    }

    try {
      await BaseApi.post('/playlist', { playlistName, musics: [] });
      fetchData();
      setIsActiveAddIcon(false);
      setPlaylistName('');
    } catch (error) {
      alert('Failed to create playlist.');
    }
  };
  console.log(artists);

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
        {artists.map((artist) => (
          <div key={artist.id} className={styles.playlistWrapper}>
            <PlayList
              playlistId={artist.id}
              playlistName={artist.playlistName}
              isActive={active}
              setActive={handleClick}
              artists={artist.musics}
              musicAudio={artist.musicAudio}
              isPlaying={currentSong.currentSongId === artist.id}
              onPlayMusicClick={() => handlePlayClick(artist.id)}
              onClick={() => handleEditClick(artist.id, artist.playlistName)}
            />
            {active && (
              <div className={styles.garbageButtonWrapper}>
                <Button
                  mode={ButtonMode.Delete}
                  type={ButtonType.IconOnly}
                  onClick={() => handleDeleteClick(artist.id)}
                  icon="/icons/trash.svg"
                />
              </div>
            )}
            {editActive && editPlaylistId === artist.id && (
              <Editpopup
                e={setPlaylistName}
                onCancel={() => setEditActive(false)}
                onConfirm={handleConfirmEdit}
              />
            )}
          </div>
        ))}
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
          onConfirm={handleAddPlaylist}
          e={setPlaylistName}
        />
      )}
    </>
  );
};

export default PlaylistPage;
