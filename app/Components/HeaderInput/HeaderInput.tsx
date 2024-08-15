'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import styles from './HeaderInput.module.scss';
import { InputPropsInterface } from './interfaces/input-props.interface';

const HeaderInput = (props: InputPropsInterface) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isActive && window.innerWidth <= 1024) {
      inputRef.current?.focus();
    }
  }, [isActive]);

  return (
    <div ref={containerRef} className={styles.mainContainer}>
      <input
        ref={inputRef}
        className={`${styles.inputStyle} ${isActive ? '' : styles.isActiveInput}`}
        type="text"
        placeholder={`${props.placeholder}`}
      />
      <Image
        className={`${styles.imgStyle} ${isActive && styles.isActive}`}
        onClick={toggleClass}
        src="/searchIcon/search.svg"
        alt="searchicon"
        width={24}
        height={24}
      />
    </div>
  );
};

export default HeaderInput;
