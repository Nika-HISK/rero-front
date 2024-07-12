'use client';

import React, { useState } from "react";
import styles from "./Input.module.scss";

const Input = () => {
    const [placeholder, setPlaceholder] = useState<string>("      Search");

    return (
        <input
            className={styles.inputStyle}
            type="text"
            placeholder={placeholder}
            onFocus={() => setPlaceholder("")}
            onBlur={() => setPlaceholder("      Search")}
        />
    );
}

export default Input;
