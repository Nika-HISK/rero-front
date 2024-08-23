import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './PopularSectionTitle.module.scss';

const PopularSectionTitle = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="Popular artists" link={'/topartists'} />
    </div>
  );
};

export default PopularSectionTitle;
