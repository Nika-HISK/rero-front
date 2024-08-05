import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';

export interface ButtonPropsInterface {
  title?: string;
  mode?: ButtonMode;
  disabled?: boolean;
  onClick?: () => void;
  icon?: string;
  type?: ButtonType;
}
