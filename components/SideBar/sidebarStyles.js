import styled from 'styled-components';
import { motion } from 'framer-motion';


export const EmailText = styled(motion.h2)`
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
    font-weight: lighter;
    @media screen and (max-width: 768px){
        position: absolute;
        left: 2.6rem;
        white-space: nowrap;
        top: 8rem;
        font-size: 13px;
    }


    @media screen and (max-width: 480px){
        position: absolute;
        left: 10rem;
        top: 7rem;
        font-size: .6rem;
    }


`
export const EmailContainer = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    top: 35%;
    left: 25px;
    @media screen and (max-width: 768px){
        top: 0;
        left: 4%;
    }

    @media screen and (max-width: 480px){
        top: -16%;
        left: 10px;

    }

`

export const EmailDivider = styled(motion.div)`
    height: 1px;
    width: 120px;
    background-color: white;
    margin: 25px 0 20px 0;
    @media screen and (max-width: 480px){
        display: none;
    }
`

export const Phone = styled(motion.li)`
    list-style: none;
    font-size: 2rem;
    font-family: nudista-web,sans-serif;
    white-space: nowrap;
    letter-spacing: .5px;
    font-weight: bold;
    margin-bottom: 10px;
    transition: all .2s cubic-bezier(.25,.46,.45,.94);
    cursor: default;
    color: #ccc;


    &:hover{
        background: #9032CF9F;
        background: linear-gradient(to bottom right, #E1DCE4B9 0%, #5FB9CFC4 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all .9s cubic-bezier(.25,.46,.45,.94);
        transform: scale(1.05);


 
    }
    @media screen and (max-width: 768px){
        position: absolute;
        left: 20.4rem;
        white-space: nowrap;
        top: 5.6rem;
        font-size: 1rem;

    }
    @media screen and (max-width: 480px){
        position: absolute;
        left: 9.1rem;
        top: 12rem;
        font-size: .9rem;
    }







`

export const PhoneText = styled(motion.h2)`
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ccc;
    font-weight: lighter;
    @media screen and (max-width: 768px){
        position: absolute;
        left: 20.6rem;
        white-space: nowrap;
        top: 8rem;
        font-size: 13px;
    }
    @media screen and (max-width: 480px){
        position: absolute;
        left: 9.5rem;
        top: 13.5rem;
        font-size: .6rem;
    }

`
export const Email = styled(motion.li)`
    font-size: 2rem;
    font-family: nudista-web,sans-serif;
    list-style: none;
    color: #ccc;
    letter-spacing: .5px;
    font-weight: bolder;
    white-space: nowrap;
    cursor:default ;
    margin-bottom: 10px;
    transition: all .2s cubic-bezier(.25,.46,.45,.94);

    &:hover{
        background: #9032CF9F;
        background: linear-gradient(to bottom right, #E1DCE4B9 0%, #5FB9CFC4 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all .9s cubic-bezier(.25,.46,.45,.94);
        transform: scale(1.05);



    }
    @media screen and (max-width: 768px){
        position: absolute;
        left: 2.5rem;
        white-space: nowrap;
        top: 5.5rem;
        font-size: 1rem;
        color: #ccc;

    }

    @media screen and (max-width: 480px){
        position: absolute;
        left: 6.7rem;
        top: 5.5rem;
        font-size: .9rem;
    }


`
export const SideLeft = styled(motion.div)`
    position: absolute;
    left: -10rem;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    background: #212124;
    @media screen and (max-width: 768px){
        left: -10rem;
    }
    @media screen and (max-width: 500px){
        display: none;
    }

`


export const SideBarContainer = styled.div`
    position: fixed;
    right: -10rem;
    top: 0;
    z-index: 2;
    height: 100%;

`


export const SideBarMenu = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: center;
    max-width: 90%;
    height: 100vh;
    background: #29292b;
    transition: all .9s cubic-bezier(.25,.46,.45,.94);
    @media screen and (max-width: 500px){
        
    }


`
export const SideRight = styled(motion.div)`
    background-color: #262628;
    position: absolute;
    right: 0;
    height: 100vh;
    width: 35vw;
    color: white;
    @media screen and (max-width: 768px){
        display: none !important;
    }
`

export const SideBarLinks = styled(motion.ul)`
    width: 0;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat( auto-fit, minmax(120px 1fr));
    font-size: 4.5rem;
    list-style: none;
    white-space: nowrap;
    letter-spacing: 2px;
    padding: 0 0 0 120px;
    transition: all .4s cubic-bezier(.25,.46,.45,.94);
    @media screen and (max-width: 768px){
        font-size: 3rem;
        padding-left: 40px;
        margin-bottom: 8rem;
        
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
        margin-bottom: 4rem;
        padding-left: 5.4rem;
        
        
    }


        
`



export const Links = styled(motion.li)`
    
    display: inline-block;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    font-family: Impact, Haettenschweiler, sans-serif;
    transition: all .15s cubic-bezier(.25,.46,.45,.94);

    





    
    &:hover{
        background: white;
        transition: all .25s cubic-bezier(.25,.46,.45,.94);
        padding-left: 20px;
        border-left: 1px solid white;
        margin-left: 4px;
        border-radius: 0 10px 10px 0;

        a {
            color: black;
        }
        
    }

    a {
        color: grey;
        &:active{
            color: #ccc;
        }
        &:visited{
            background: white;
            transition: all .25s cubic-bezier(.25,.46,.45,.94);
            padding-left: 20px;
            border-left: 1px solid white;
            margin-left: 4px;
        }
    }
    


    @media screen and (max-width: 768px){
        margin-bottom: 24px;
    }

    @media screen and (max-width: 480px){
        font-family: nudista-web,sans-serif;
        font-weight: 550;
        margin-bottom: 15px;
   
    }



    


    

`