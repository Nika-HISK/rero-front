import React from "react";
import styles from "./Input.module.scss";

interface Props {
    appearance?: 'onLoginIn' | 'onNavBar';
    placeholder?: 'Search' | 'Email' | 'Password';
    searchIcon?: '/searchIcon/search.svg';
    searchIconState?: 'searchIconState';
}

const Input = (props: Props) => {
    return (
        <div className={styles.mainContainer} >
            {props.searchIcon && (
                <img
                    className={props.searchIconState ? styles[props.searchIconState] : ''}
                    src={props.searchIcon}
                />
            )}
            {
                props.appearance == 'onNavBar' && props.placeholder == 'Search' ?
                    <input
                        type="text"
                        className={styles[props.appearance]}
                        placeholder={props.placeholder}
                    />
                    :
                    <input
                        type="text"
                        className={props.appearance ? styles[props.appearance] : ""}
                        placeholder={props.placeholder}
                    />
            }
        </div>
    );
}

export default Input;
