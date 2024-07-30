import Image from 'next/image';
import IconsProps from './icon-props.interface';


const Icon = (props: IconsProps) => {
  const src = props.isActive
    ? `/icons/${props.name}Active.svg`
    : `/icons/${props.name}.svg`;

  return ( 
  <Image src={src} alt="icon" width={props.width} height={props.height} />
  )
};

export default Icon