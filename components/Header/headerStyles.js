import styled from 'styled-components';
import { FiArrowRight } from "react-icons/fi";
import { motion } from 'framer-motion';


export const ButtonWrap = styled(motion.div)`
    display: flex;
    border-bottom: 1.5px solid white;
    width: fit-content;
    justify-content: center;
    align-items: center;

`

export const Arrow = styled(FiArrowRight)`
    font-size: 20px;
    margin-left:4px;
    margin-bottom: 3px;
    transition: all .25s cubic-bezier(.215,.61,.355,1);

`

export const HeaderContainer = styled.div`
    display: flex;
    max-width: 1440px;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    height: 100vh;
    z-index: 1;
      
`;

export const HeaderWrap = styled(motion.div)`
    margin: auto 19rem auto 14rem;
    max-width: 1024px;
    color: white;

    @media screen and (max-width: 768px){
        margin: 14rem 0 2rem 6.5rem;
        width: 100%;

    }
    @media screen and (max-width: 480px){
        margin: 12rem 0 1rem 3.5rem;
        width: 100%;
    }
 
`



export const HeaderTitle = styled(motion.h1)`
    margin-bottom: -25px;
    text-transform: capitalize;
    font-size: 8px;
    max-width: 800px;
    line-height: 1.4;
    letter-spacing: .9px;
    font-family: nudista-web,sans-serif;

    @media screen and (max-width: 768px){
        width: 100%;
        margin-top: 10px;
    }
    @media screen and (max-width: 480px){
        width: 68%;
    }



`

export const HeaderIntro = styled(motion.p)`
    display: inline-block;
    position: relative;
    font-size: 2rem;
    color: white;
    font-family: 'Raleway', sans-serif;
    width: 67vw;
    line-height: 1.6;
    font-weight: bold;
    letter-spacing:  .3px;
    text-transform: none;
    margin-top: 6rem;
    margin-bottom: 6rem;
    @media screen and (max-width: 768px){
        font-size: 20px;
        margin-top: 5rem;
        width: 50ch;
        margin-bottom: 3rem;
    }
    @media screen and (max-width: 480px){
        font-size: 19px;
        width: 28ch;
    }


`

export const Button = styled.button`
    outline: none;
    border: none;
    white-space: nowrap;
    padding-bottom: 5px;
    background: transparent;
    font-family: nudista-web,sans-serif;
    font-weight: 600;
    color: white;
    cursor: pointer;
    font-size: 15px;
    letter-spacing: 1.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .25s cubic-bezier(.215,.61,.355,1);
    &:hover{
        padding-right: 10px;

    }
    @media screen and (max-width: 480px){
        font-size: 13.4px;
    }


    

  
`