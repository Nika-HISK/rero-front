import styles from './Released.module.scss';
import Button from '@/app/Components/Button/Button';
import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';

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
