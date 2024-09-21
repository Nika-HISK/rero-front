import Link from 'next/link';
import styles from './Released.module.scss';
import { ReleasedPropsInterface } from './interfaces/released-props.interface';
import Button from '@/app/Components/Button/Button';
import { ButtonMode } from '@/app/Enums/ButtonMode.enum';
import { ButtonType } from '@/app/Enums/ButtonType.enum';

const Released = (props: ReleasedPropsInterface) => {
  return (
    <div className={styles.albumRelase}>
      <div className={styles.albumRelaseContainer}>
        <p>Released Albums</p>
        <div className={styles.button}>
          <Link href={`/album/${props.id}`}>
            <Button
              mode={ButtonMode.More}
              type={ButtonType.Text}
              title="More"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Released;
