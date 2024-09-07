import Image from 'next/image';
import styles from './Icon.module.scss';
import IconPropsInterface from './interfaces/icon-props.interface';

const Icon = ({
  isActive,
  onClick,
  name,
  width,
  height,
}: IconPropsInterface) => {
  const src = isActive ? `/icons/${name}Active.svg` : `/icons/${name}.svg`;

  return (
    <div className={styles.container}>
      <Image
        src={src}
        alt="icon"
        width={width}
        height={height}
        onClick={onClick}
      />
    </div>
  );
};

export default Icon;
