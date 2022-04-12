import React, { useState, useEffect } from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./style";
import { IoHardwareChipSharp } from 'react-icons/io5';

export default function Navbar() {

    const [navBar, setNavBar] = useState(false);

    function changeBackground(){
        if(window.scrollY >= 80){
            setNavBar(true);
        } else{
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <Nav navbar={navBar}>
                <Bars />
                <IoHardwareChipSharp color='green' style={{ marginTop: '10px', width: '60px', height: '60px' }} />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/pieces" activeStyle>
                        Peças
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
}
