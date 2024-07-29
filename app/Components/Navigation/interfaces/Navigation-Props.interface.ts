export interface NavigationPropsInterface {
  title: string;
  left?: boolean;
  middle?: boolean;
  right?: boolean;
  isActive: boolean;
  onClick: () => void;
  link?: string;
}
