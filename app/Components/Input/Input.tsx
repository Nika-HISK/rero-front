'use client';

import React, { useState } from "react";
import styles from "./Input.module.scss";

interface Props {
    placeholder: string;
}

const Input = (props: Props) => {
    const [placeholder, setPlaceholder] = useState<string>('');

    return (
        <input
            className={styles.inputStyle}
            type="text"
            placeholder={props.placeholder}
            onFocus={() => setPlaceholder("")}
            onBlur={() => setPlaceholder(`${props.placeholder}`)}
        />
    );
}

export default Input;
