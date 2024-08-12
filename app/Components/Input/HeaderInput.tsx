'use client';

import styles from "./Input.module.scss";
import React, { useState, useEffect, useRef } from "react";
import { InputPropsInterface } from "./interfaces/input-props.interface";

const HeaderInput = (props: InputPropsInterface) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const inputRef = useRef<HTMLDivElement>(null);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={inputRef} className={styles.mainContainer}>
            <input
                className={`${styles.inputStyle} ${isActive ? '' : styles.isActiveInput}`}
                type="text"
                placeholder={`       ${props.placeholder}`}
            />
            <img
                className={`${styles.imgStyle} ${isActive && styles.isActive}`}
                onClick={toggleClass}
                src="/searchIcon/search.svg"
            />
        </div>
    );
};

export default HeaderInput;
