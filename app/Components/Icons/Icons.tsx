import Image from 'next/image';
import IconsProps from './Icons.interface';
import { IconsEnum } from '@/app/Enums/Icons.enum';

const Icons = (props: IconsProps) => {
  const src = props.isActive
    ? `/icons/${props.name}Active.svg`
    : `/icons/${props.name}.svg`;

  return ( 
  <Image src={src} alt="icon" width={props.width} height={props.height} />
  )
};

export default Icons