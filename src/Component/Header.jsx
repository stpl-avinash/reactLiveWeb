import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <NavLink activeClassName='is-active' to='/about'>About</NavLink> <br/>
            <NavLink activeClassName='is-active' to='/contact'>Contact</NavLink> <br/>
            <NavLink activeClassName='is-active' to='/home'>Home</NavLink>

            {/* <p><a className="link-opacity-10" href="./about">About</a></p>
            <p><a className="link-opacity-25" href="./contact">Contact</a></p>
            <p><a className="link-opacity-50" href="./home">Home</a></p> */}
        </>
    )
}

export default Header;