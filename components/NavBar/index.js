/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import NavButton from '../NavButton';
import SideBar from '../SideBar';
import { NavbarContainer, NavBarItems, IconLine, NavIcon } from './navBarStyles';
import { variants, logoVariantContainer, logoVariant, heightVariant } from './navBarAnimation';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';



const NavBar = () => {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 500px)'
    });
    const [isOpen, setIsOpen] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(
        typeof window !== 'undefined' ? window.pageYOffset : 0,
    );

    useEffect(() => {
        if (typeof window !== 'undefined' && window.pageYOffset !== 1) { //1 here to initiate the scroll
            const handleScroll = () => setScrollPosition(window.pageYOffset);
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);

        }
    }, [scrollPosition]);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    };


    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <>
            <SideBar isOpen={isOpen} />
            {
                mounted &&
                isMobile &&
                <NavbarContainerRes layout variants={heightVariant} isOpen={isOpen} scrollPosition={scrollPosition} initial='hidden' animate='show'>
                    <NavBarItems>
                        <NavIcon variants={logoVariantContainer} initial='hidden' animate='show'>
                            <motion.h1 variants={logoVariant}>LOGO</motion.h1>
                        </NavIcon>
                        <NavBarButtonres>
                            <NavButton isOpen={isOpen} toggleOpen={toggleOpen} />
                        </NavBarButtonres>
                    </NavBarItems>
                </NavbarContainerRes>
            }
            <NavbarContainer>
                <NavBarItems >
                    <NavIcon variants={logoVariantContainer} initial='hidden' animate='show'>
                        <motion.h1 variants={logoVariant}>LOGO</motion.h1>
                    </NavIcon>
                    <IconLine layout variants={variants} initial='hidden' animate={scrollPosition > 50 ? 'show' : 'hidden'} />
                    <NavButton layout isOpen={isOpen} toggleOpen={toggleOpen} />
                </NavBarItems>
            </NavbarContainer>



        </>
    )
}
const NavbarContainerRes = styled(motion.nav)`
    display: flex;
    position: fixed;
    top: ${props => props.scrollPosition > 130 ? '-5rem' : '0'};
    top: ${props => props.isOpen && '0'};
    left: 0;
    right: 0;
    z-index: 2;
    height: 10vh;
`

const NavBarButtonres = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    top: -2px;

`








export default NavBar;
