import Button from '@/app/Components/Button/Button';
import styles from './Released.module.scss';
import { ButtonMode, ButtonType } from '@/app/Enums/Enums';

const Released = () => {
  return (
    <div className={styles.albumRelase}>
      <div className={styles.albumRelaseContainer}>
        <p>Released Albums</p>
        <div className={styles.button}>
          <Button mode={ButtonMode.More} type={ButtonType.Text} title="More" />
        </div>
      </div>
    </div>
  );
};

export default Released;
