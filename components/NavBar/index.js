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


    return (
        <>
            <SideBar isOpen={isOpen} />
            {
                isMobile && (<>
                    <NavbarContainerRes variants={heightVariant} layout scrollPosition={scrollPosition} initial='hidden' animate='show'>
                        <NavBarItemsRes>
                            <NavIcon variants={logoVariantContainer} initial='hidden' animate='show'>
                                <motion.h1 variants={logoVariant}>LOGO</motion.h1>
                            </NavIcon>
                            <NavButtonRes layout>
                                <NavButton isOpen={isOpen} toggleOpen={toggleOpen} />
                            </NavButtonRes>
                        </NavBarItemsRes>
                    </NavbarContainerRes>

                </>)
            }
            <NavbarContainer  >
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
const NavBarItemsRes = styled.div`
    max-width: 100%;
    height: ${props => props.scrollPosition > 10 ? '0' : '10vh'};

`
const NavbarContainerRes = styled(motion.nav)`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: ${props => props.scrollPosition > 130 ? '-5rem':'0'};
    left: 0;
    z-index: 2;
    margin-bottom: -50px;
    right: 0;
    height: 10vh;
    max-width: 100%;
    background: #18181a;
`
const NavButtonRes = styled.div`
    position: relative;
    right: -25rem;
    top: -1.7rem;

`






export default NavBar;
