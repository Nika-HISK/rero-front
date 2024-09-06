import { artistData } from '@/app/(authorised)/playlist/dummyData/dummyData';

export interface PlaylistPopUpProps {
  onCancel: () => void;
  onConfirm: () => void;
  e: (data: string) => void;
  data: artistData[];
}
