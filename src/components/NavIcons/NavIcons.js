import React from 'react'
import { NavIconStyle } from './Styles'


const NavIcons = ({iconName}) => {
    return (
        <NavIconStyle>
            <i className={iconName}></i>
        </NavIconStyle>
    )
}

export default NavIcons
