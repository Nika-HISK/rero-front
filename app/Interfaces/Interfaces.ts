import type { ButtonMode } from '../Enums/ButtonMode.enum';
import { ButtonMode } from '../Enums/ButtonMode.enum';

export interface Button {
  title?: string;
  mode?: ButtonMode;
  disabled?: boolean;
  onClick?: () => void;
  icon?: string;
  type?: ButtonType;
}
