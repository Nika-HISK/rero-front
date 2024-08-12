import type { ButtonMode } from '../Enums/ButtonMode.enum';
import { ButtonType } from '../Enums/ButtonType.enum';

export interface Button {
  title?: string;
  mode?: ButtonMode;
  disabled?: boolean;
  onClick?: () => void;
  icon?: string;
  type?: ButtonType;
}