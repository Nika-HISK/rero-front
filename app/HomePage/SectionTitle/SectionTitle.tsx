import styles from './SectionTitle.module.scss';
import { SectionTitlePropsInterface } from './interface/section-title-props.interface';
import Button from '@/app/Components/Button/Button';
import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';

const SectionTitle = (props: SectionTitlePropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <p>{props.title}</p>
      <div className={styles.button}>
        <Button mode={ButtonMode.More} type={ButtonType.Text} title="More" />
      </div>
    </div>
  );
};

export default SectionTitle;
