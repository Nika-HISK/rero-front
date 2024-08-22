import styles from "./SelectPlaylistPopUp.module.scss";
import { useState } from "react";
import { Props } from "./interface/Select-playlist-popup-interface";
import { albumsSelectPupUpDummy } from "./select-playlist-dummy-data/dummy-data";
import { ItemType } from "./select-playlist-dummy-data/dummy-data";
import Button from "../Button/Button";
import { ButtonMode } from "@/app/Enums/ButtonMode.enum";
import { ButtonType } from "@/app/Enums/ButtonType.enum";

const SelectPlaylistPopUp = (props: Props) => {

    const [value, setValue] = useState<string | undefined>(undefined);

    const onChangeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        props.value(true)
    }

    console.log(props.option)

    return (
        <div className={styles.mainWrapper} >
            <div className={styles.wrapper} >
                <div className={styles.captionAndSelectWrapper} >
                    <span className={styles.captionStyle} >Select Playlist</span>
                    <div className={styles.selectStyleWrapper} >
                        <select className={styles.selectStyle} value={value} onChange={onChangeValue} >
                            {albumsSelectPupUpDummy.map((item: ItemType, index: number) => (
                                <option key={index + 1} className={styles.optionStyle}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={styles.buttonsWrapper} >
                    <div className={styles.cancelButtonWrapper} >
                        <Button mode={ButtonMode.Fill} title="Cancel" type={ButtonType.Text} onClick={() => props.value(!props.option)} />
                    </div>
                    <div className={styles.confirmButtonWrapper} >
                        {props.option ?
                            <Button title="Confirm" mode={ButtonMode.Fill} type={ButtonType.Text}  disabled /> :
                            <Button mode={ButtonMode.Fill} title="Confirm" type={ButtonType.Text} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectPlaylistPopUp;
