import type { ButtonMode, ButtonType } from '../Enums/Enums';

export interface Button {
  title?: string;
  mode?: ButtonMode;
  disabled?: boolean;
  onClick?: () => void;
  icon?: string;
  type?: ButtonType;
}
