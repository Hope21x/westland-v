import styled from 'styled-components';
import { motion } from 'framer-motion';


export const IconLine = styled(motion.div)`
    height: 1px;
    top: 4.5rem;
    background: white;
    position: absolute;
    width: 6.8rem;
    left: 0;

    @media screen and (max-width: 500px){
        display: none !important;
    }


    
`
export const NavbarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: transparent;
    height: 10vh;


    @media screen and (max-width: 500px){ 
        display: none !important;
    }
    
    
    
`
export const NavBarItems = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    height: 10vh;

`
export const NavIcon = styled(motion.div)`
    position: relative;
    color: white;
    left: 30px;
    top: 20px;
`