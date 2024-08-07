export interface NavigationPropsInterface {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
  link?: string;
}

export interface NavigationMapPropsInterface {
  map: NavigationPropsInterface[];
}
