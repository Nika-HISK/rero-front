import Image from "next/image";
import styles from './MusicPhoto.module.scss';
import { MusicPhotoProps } from "@/app/Interfaces/Interfaces";

const MusicPhoto: React.FC<MusicPhotoProps> = ({ src, music, artist }) => (
    <div className={styles.musicPhoto}>
        <div className={styles.photo}>
            <Image src={src} width={78} height={78} alt='musicPhoto' />
        </div>
        <div className={styles.musicInfo}>
            <span className={styles.musicName}>{music}</span>
            <span className={styles.artistName}>{artist}</span>
        </div>
    </div>
);

export default MusicPhoto;
