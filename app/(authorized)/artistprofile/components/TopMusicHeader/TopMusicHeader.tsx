import styles from './TopMusicHeader.module.scss';

const TopMusicHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overview}>
        <span>Overview</span>
      </div>
    </div>
  );
};

export default TopMusicHeader;
