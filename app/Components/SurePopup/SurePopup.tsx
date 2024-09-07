import Button from '../Button/Button';
import styles from './SurePopup.module.scss';
import { Props } from './interface/surepopup-interface';
import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';

const SurePopup = (props: Props) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <h2>Are you sure?</h2>
        <div className={styles.container}>
          <div className={styles.nobutton}>
            <Button
              type={ButtonType.Text}
              mode={ButtonMode.Outline}
              title="No"
              onClick={() => props.onCancel}
            />
          </div>
          <div className={styles.button}>
            <Button
              type={ButtonType.Text}
              mode={ButtonMode.Little}
              title="Yes"
              onClick={props.onConfirm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurePopup;
