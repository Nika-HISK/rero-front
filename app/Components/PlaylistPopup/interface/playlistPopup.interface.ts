import { artistData } from '@/app/(authorized)/playlist/dummyData/dummyData';

export interface PlaylistPopUpProps {
  onCancel: () => void;
  onConfirm: () => void;
  e: (data: string) => void;
  data: artistData[];
}
