'use client';

import Image from 'next/image';
import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import styles from './HeaderInput.module.scss';
import { InputPropsInterface } from './interfaces/input-props.interface';
// import BaseApi from '@/app/api/BaseApi';

const HeaderInput = (props: InputPropsInterface) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<string>('');
  // const [searchResults, setSearchResults] = useState<any[]>([]);

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

  const handleSearch = async () => {
    try {
      // const response = await BaseApi.post(`/listeners`, value);
      // setSearchResults(response.data);
    } catch (error) {
      alert('Failed fetching data:');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim() !== '') {
      handleSearch();
    }
  };

  return (
    <div ref={containerRef} className={styles.mainContainer}>
      <input
        ref={inputRef}
        className={`${styles.inputStyle} ${isActive ? '' : styles.isActiveInput}`}
        type="text"
        placeholder={`${props.placeholder}`}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onKeyDown={handleKeyDown}
      />
      <Image
        className={`${styles.imgStyle} ${isActive && styles.isActive}`}
        onClick={toggleClass}
        src="/searchIcon/search.svg"
        alt="searchicon"
        width={34}
        height={34}
      />

      <div className={styles.resultsContainer}>
        {/* {searchResults.map((result, index) => (
          <div key={index} className={styles.resultItem}>
            {result.name}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default HeaderInput;
