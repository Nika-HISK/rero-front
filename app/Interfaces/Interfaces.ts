import type { ButtonMode, ButtonType } from '../Enums/Enums'

export interface Button {
    title?: string;
    mode?: ButtonMode;
    disabled?: boolean;
    onClick?: () => void;
    icon?: string;
    type?: ButtonType;
}

export interface MusicPhotoProps {
    src: string;
    music: string;
    artist: string;
};

export interface Song {
    src: string;
    music: string;
    artist: string;
    audioSrc: string;
};

export interface SongProps {
    songs: Song[];
};

export interface AdjustButton {
    onVolumeDown: () => void;
    onVolumeUp: () => void;
    onPreviousSong: () => void;
    onNextSong: () => void;
    onPlayMusic: () => void;
    playing: boolean;
};

export interface Player {
    playing: boolean;
    currentTime: number;
    duration: number;
    progressRef: React.RefObject<HTMLInputElement>;
    ipadProgressRef: React.RefObject<HTMLInputElement>;
    onProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onTenSecondsBack: () => void;
    onVolumeDown: () => void;
    onVolumeUp: () => void;
    onPreviousSong: () => void;
    onNextSong: () => void;
    onPlayMusic: () => void;
};

export interface ProgressBarsProps {
    currentTime: number;
    duration: number;
    onProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onTenSecondsBack: () => void;
    progressRef: React.RefObject<HTMLInputElement>;
    ipadProgressRef: React.RefObject<HTMLInputElement>;
}

export interface InputRangeProps {
    defaultValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    progressRef: React.RefObject<HTMLInputElement>;
};

export interface MainAdjustProps {
    onVolumeDown: () => void;
    onVolumeUp: () => void;
    onPreviousSong: () => void;
    onNextSong: () => void;
    onPlayMusic: () => void;
    playing: boolean;
};

export interface MainAudioProps {
    playing: boolean;
    currentTime: number;
    duration: number;
    progressRef: React.RefObject<HTMLInputElement>;
    ipadProgressRef: React.RefObject<HTMLInputElement>;
    onProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onVolumeDown: () => void;
    onVolumeUp: () => void;
    onPreviousSong: () => void;
    onNextSong: () => void;
    onPlayMusic: () => void;
};

export interface ProgressBarProps {
    currentTime: number;
    duration: number;
    progressRef: React.RefObject<HTMLInputElement>;
    handleProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    loop: boolean;
    toggleLoop: () => void;
}