import React from 'react'
import { NavMenu,Menu } from './NavButtonStyles';



const NavButton = ({ isOpen, toggleOpen }) => {
    return (
    <>
        <NavMenu onClick={toggleOpen} isOpen={isOpen}>
            <Menu isOpen={isOpen}></Menu>
            <Menu isOpen={isOpen}></Menu>
            <Menu isOpen={isOpen}></Menu>
        </NavMenu>
    </>

)}



export default NavButton;