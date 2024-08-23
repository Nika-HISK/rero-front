'use client';

import Image from 'next/image';
import styles from './Arrow.module.scss';

const ArrowLink = () => {
  return (
    <>
      <div className={styles.arrow}>
        <Image
          src="/Arroww.png"
          alt="arrow"
          width={32}
          height={32}
        />
      </div>
    </>
  );
};

export default ArrowLink;
