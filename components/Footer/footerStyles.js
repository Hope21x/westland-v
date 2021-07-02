import { motion } from 'framer-motion';
import styled from 'styled-components';



export const Social = styled(motion.ul)`
    display: flex;
    position: absolute;
    margin-left: 2rem;
    right: 5rem;
    top: 5.5rem;
    @media screen and (max-width: 768px){
        position: absolute;
        right: -3.6rem;
    }
    @media screen and (max-width: 500px){
        right: -4.1rem;
    }


`
export const SocialIcons = styled(motion.li)`
    display: inline-block;
    list-style: none;
    margin-right: 3rem;
    width: 24px;
    height: 24px;
    z-index: 1;
    &:hover :before{
        border-radius: 35%;
        transform: scale(2);
        background-color: white;
        transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);


    }
    &:hover :nth-child(1){
        svg{
            fill: #4267B2;
        }
    }    
    &:hover :nth-child(2){
        svg{
            fill: #B46B3A;
        }
    }    
    &:hover :nth-child(3){
        svg{
            fill: #FF0000;
        }
    }    
    &:hover :nth-child(4){
        svg{
            fill: #1DA1F2
;
        }
    }


    &:before {
        list-style: none;
        display: inline-block;
        border-radius: 35%;
        position: absolute;
        background: white;
        content: '';
        height: 24px;
        width: 24px;
        z-index: -1;
        transform: scale(0);
        transition: all .4s cubic-bezier(.19,1,.22,1);


    }

    svg{
        fill: grey;
    }



`
export const MiddleLine = styled(motion.div)`
    position: absolute;
    right: 0;
    background-color: grey;
    width: 1px;
    @media screen and (max-width: 768px){
        display: none !important;
    }
    @media screen and (max-width: 500px){
        display: none !important;
    }

`


export const FooterContainer = styled.div`
    position: relative;
    background: #262628;
    overflow: hidden;
    max-width: 100vw;
    padding: 4.5% 0;
    min-height: 30vh;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        min-height: 54vh;
        padding-top: 8rem;
        justify-content: center;
        align-items: center;

    }
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        min-height: 54vh;
        padding-top: -4rem;
        justify-content: center;
    }

    
`
export const FooterContent = styled.div`
    position: relative;
    max-width: 1024px;
    margin: 0 auto;
    color: white;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px){
        flex-direction: row;
        justify-content: center;

    }

    



`
export const FooterLogo = styled.div`
    width: 230px;
    height: 230px;
    margin-right: 40rem;
    display: inline-block;
    @media screen and (max-width: 768px){
        margin-right: 1rem;
        margin-top: -3rem;
    }
    @media screen and (max-width: 500px){
        margin-right: -1rem;
    }
    
`
export const FooterRights = styled.div`
    margin-top: 5rem;
    text-transform: capitalize;
    font-size: 13px;
    color: hsla(0,0%,74.1%,.4);
    letter-spacing: .4px;
    min-width: 25rem;
    font-family: 'Montserrat Alternates', sans-serif;
    @media screen and (max-width: 768px){
        margin-top: 13rem;
        font-size: 12px;

    }
    @media screen and (max-width: 500px){
        font-size: 11px;
        position: absolute;
        left: -20px;
    }

`
