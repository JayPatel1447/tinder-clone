import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton"

function Header() {
    return (
        <div className="header">
                {/* Where IconButton is used to clickable so PersonIcon/PersonImageIcon will become Clickable  */}
                <IconButton>
                    <PersonIcon fontSize="large" className="header_icon"/>
                </IconButton>

                <img className="header_logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt=""/>
        </div>
    )
}

export default Header
