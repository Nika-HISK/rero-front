
import React from "react";
import Input from "./Input/Input";



const InputBlock = () => {
    return (
        <React.Fragment>
            <Input
                placeholder='Search'
                appearance='onNavBar'
                searchIcon='/searchIcon/search.svg'
                searchIconState='searchIconState'
            />
        </React.Fragment>
    )
}

export default InputBlock;