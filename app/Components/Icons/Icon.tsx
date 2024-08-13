import Image from 'next/image';
import IconPropsInterface from './icon-props.interface';

const Icon = (props: IconPropsInterface) => {
  const src = props.isActive
    ? `/icons/${props.name}Active.svg`
    : `/icons/${props.name}.svg`;

  return (
    <Image src={src} alt="icon" width={props.width} height={props.height} />
  );
};

export default Icon;
