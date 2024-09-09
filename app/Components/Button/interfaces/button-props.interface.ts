import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';

export interface ButtonPropsInterface {
  title?: string;
  mode?: ButtonMode;
  disabled?: boolean;
  icon?: string;
  type?: ButtonType;
  onClick?: () => void;
}
