import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './SelectPlaylistPopUp.module.scss';
import { SelectPlaylistPopupPropsInterface } from './interface/select-playlist-popup-props.interface';
import { PlaylistData } from '@/app/(authorized)/playlist/interface/playlist-interface';
import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';
import BaseApi from '@/app/api/BaseApi';

const SelectPlaylistPopUp = (props: SelectPlaylistPopupPropsInterface) => {
  const [value, setValue] = useState<string>('Default');
  const [data, setData] = useState<PlaylistData[]>([]);
  const [playlistId, setPLaylistId] = useState<number | null>(null);
  const [musicId, setMusicId] = useState<number | null>(null);

  const onChangeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setPLaylistId(Number(selectedValue));
    setValue(selectedValue);
    props.setOpen(true);
  };

  const fetchData = async () => {
    try {
      const response = await BaseApi.get('/playlist');
      setData(response.data);
    } catch (error) {
      alert('Couldnot fetch data');
    }
  };

  useEffect(() => {
    fetchData();
    setMusicId(props.id);
  }, [props.id]);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.captionAndSelectWrapper}>
          <span className={styles.captionStyle}>Select Playlist</span>
          <div className={styles.selectStyleWrapper}>
            <select
              className={styles.selectStyle}
              value={value}
              onChange={onChangeValue}
            >
              <option value="Default">Default</option>
              {data.map((playlist: PlaylistData, index: number) => (
                <option
                  key={index}
                  value={String(playlist.id)}
                  className={styles.optionStyle}
                >
                  {playlist.playlistName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.buttonsWrapper}>
          <div className={styles.cancelButtonWrapper}>
            <Button
              mode={ButtonMode.Fill}
              title="Cancel"
              type={ButtonType.Text}
              onClick={() => props.setOpen(false)}
            />
          </div>
          <div className={styles.confirmButtonWrapper}>
            <Button
              mode={ButtonMode.Fill}
              title="Confirm"
              type={ButtonType.Text}
              disabled={value === 'Default'}
              onClick={async () => {
                await BaseApi.post(`/playlist/${playlistId}/add/${musicId}`);
                props.setOpen(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlaylistPopUp;
