export interface MusicBoxPropsInterace {
    artistName: string;
    musicName: string; // Optional, if used for display purposes only
    cover: string;
    musicSrc: string;
  }
  
  export interface MusicProps {
    musics: MusicBoxPropsInterace[];
  }
  
  export const dummyMusicBoxData = {
    artistName: 'John Doe',
    musicName: 'Sample Track', // Adjusted for consistency, if needed
    cover: '/sample-cover.jpg',
    musicSrc: '/sample-music.mp3',
  };
  