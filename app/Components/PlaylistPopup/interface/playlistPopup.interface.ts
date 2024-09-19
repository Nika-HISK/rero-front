import { artistData } from '@/app/(authorised)/playlist/interface/artist-data.interface';

export interface PlaylistPopUpProps {
  onCancel: () => void;
  onConfirm: () => void;
  e: (data: string) => void;
  data: artistData[];
}
