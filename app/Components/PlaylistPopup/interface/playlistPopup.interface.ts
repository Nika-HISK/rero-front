export interface PlaylistPopUpProps {
  onCancel: () => void;
  onConfirm: () => void;
  e: (data: string) => void;
  value?: string;
}
