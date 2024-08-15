import Image from 'next/image';
import styles from './Icon.module.scss';
import IconPropsInterface from './interfaces/icon-props.interface';

const Icon = (props: IconPropsInterface) => {
  const src = props.isActive
    ? `/icons/${props.name}Active.svg`
    : `/icons/${props.name}.svg`;

  return (
    <div className={styles.container}>
      <Image src={src} alt="icon" width={props.width} height={props.height} />
    </div>
  );
};

export default Icon;
