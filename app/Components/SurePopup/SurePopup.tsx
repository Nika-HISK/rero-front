import { ButtonType } from '@/app/Enums/ButtonType.enum';
import Button from '../Button/Button';
import styles from './SurePopup.module.scss';
import { ButtonMode } from '@/app/Enums/ButtonMode.enum';

const SurePopup = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Are you sure?</h2>
      <div className={styles.container}>
        <div className={styles.button}>
          <Button type={ButtonType.Text} mode={ButtonMode.Outline} title="No" />
        </div>
        <div className={styles.button}>
          <Button type={ButtonType.Text} mode={ButtonMode.Little} title="Yes" />
        </div>
      </div>
    </div>
  );
};

export default SurePopup;
