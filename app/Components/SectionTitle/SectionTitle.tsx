import { ButtonMode, ButtonType } from '@/app/Enums/Enums';
import Button from '../Button/Button';
import styles from './SectionTitle.module.scss';

const SectionTitle = () => {
  return (
    <div className={styles.container}>
      <p>Popular Artist</p>
      <div className={styles.button}>
        <Button type={ButtonType.Text} mode={ButtonMode.More} title='More'/>
      </div>
    </div>
  );
};

export default SectionTitle;
