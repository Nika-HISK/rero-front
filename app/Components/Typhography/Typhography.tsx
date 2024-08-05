import { TypographyPropsInterface } from './interfaces/typography-props.interface';
import styles from './Typhography.module.scss';

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
