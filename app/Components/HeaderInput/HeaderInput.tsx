import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import Image from 'next/image';
import styles from './HeaderInput.module.scss';
import { HeaderInputSearchInterface } from './interfaces/input-props.interface';

const HeaderInput = (props: HeaderInputSearchInterface) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    props.onSearch(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      props.onSearch(inputValue);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Image src={'/search.png'} alt="search" width={24} height={24} />
      <input
        type="text"
        value={inputValue}
        placeholder={props.placeholder}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className={styles.input}
      />
    </div>
  );
};

export default HeaderInput;
