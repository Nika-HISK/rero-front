import { ReactNode } from 'react';
import { TyphographyEnum } from '@/app/Enums/Typhography.enum';
import { ColorsEnum } from '@/app/Enums/colors.enum';

export interface TypographyPropsInterface {
  children: ReactNode;
  type: TyphographyEnum;
  color?: ColorsEnum;
}
