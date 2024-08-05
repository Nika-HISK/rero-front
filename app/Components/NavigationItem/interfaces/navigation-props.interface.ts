export interface NavigationPropsInterface {
  title: string;
  isActive: boolean;
  onClick: () => void;
  href?: string;
}
