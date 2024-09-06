import { useState } from 'react';
import Button from '../Button/Button';
import styles from './SelectPlaylistPopUp.module.scss';
import { SelectPlaylistPopupPropsInterface } from './interface/select-playlist-popup-props.interface';
import { albumsSelectPupUpDummy } from './select-playlist-dummy-data/dummy-data';
import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';

const SelectPlaylistPopUp = (props: SelectPlaylistPopupPropsInterface) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const onChangeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    props.setOpen(true);
  };

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
              {albumsSelectPupUpDummy.map((item, index) => (
                <option key={index} className={styles.optionStyle}>
                  {item.name}
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
              disabled={!value}
              onClick={() => props.setOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlaylistPopUp;
