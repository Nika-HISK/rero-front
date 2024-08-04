import styles from './Typhography.module.scss';
import { TypographyPropsInterface } from './interfaces/typography-props.interface';

const Typhography = (props: TypographyPropsInterface) => {
  return (
    <>
      <div className={styles[props.type]} style={{ color: props.color }}>
        {props.children}
      </div>
    </>
  );
};

export default Typhography;
