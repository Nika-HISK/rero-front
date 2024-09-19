import { MusicInterface } from "./music-props.interface";

export interface ArtistInterface {
  id: number;
  artistName: string;
  artistPhoto: string;
  biography: string;
  musics?: MusicInterface[]
}
