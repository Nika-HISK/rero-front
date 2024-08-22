'use client';

import Image from 'next/image';
import styles from './Arrow.module.scss';
import { useState } from 'react';
import PlayerFullScreen from '@/app/Components/PlayerFullScreen/PlayerFullScreen';

const ArrowLink = () => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);
  };

  return (
    <>
      <div className={styles.arrow}>
        <Image
          src="/Arroww.png"
          alt="arrow"
          width={32}
          height={32}
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default ArrowLink;
