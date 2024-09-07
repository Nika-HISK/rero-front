export const artistInfo: artistData[] = [
  {
    playlistName: '2pac',
    artistPhoto: 'playlist.jpg',
    id: 1,
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
      {
        src: '/2pac.jpg',
        musicName: 'Song 1',
        artistName: 'Artist 1',
        albumName: 'Album 1',
        createTime: '3:45',
      },
    ],
  },
  {
    playlistName: 'lela wurwumia',
    artistPhoto: 'playlist.jpg',
    id: 2,
    songs: [
      {
        src: '/2pac.jpg',
        musicName: 'Song 2',
        artistName: 'Artist 2',
        albumName: 'Album 2',
        createTime: '4:12',
      },
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
  },
  {
    playlistName: 'suicideboys',
    artistPhoto: 'playlist.jpg',
    id: 3,
    songs: [
      {
        src: '/2pac.jpg',
        musicName: 'Song 2',
        artistName: 'Artist 2',
        albumName: 'Album 2',
        createTime: '4:12',
      },
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
  },
];

export interface artistData {
  playlistName: string;
  artistPhoto: string;
  id: number;
  songs: SongObject[];
}

export interface SongObject {
  src: string;
  musicName: string;
  artistName: string;
  albumName: string;
  createTime: string;
}
