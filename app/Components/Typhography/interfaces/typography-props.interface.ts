import { ReactNode } from 'react';
import { ColorsEnum } from '@/app/Enums/colors.enum';
import { TyphographyEnum } from '@/app/Enums/Typhography.enum';

export interface TypographyPropsInterface {
  children: ReactNode;
  type: TyphographyEnum;
  color?: ColorsEnum;
}
