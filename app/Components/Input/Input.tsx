'use client';

import styles from "./Input.module.scss";
import React from "react";
import { InputPropsInterface } from "./InputPropsInterface/InputPropsInterface";

const Input = (props: InputPropsInterface) => {

    return (
        <input
            className={styles.inputStyle}
            type="text"
            placeholder={`      ${props.placeholder}`}
            onFocus={() => ``}
            onBlur={() => `${props.placeholder}`}
        />
    );
}

export default Input;
