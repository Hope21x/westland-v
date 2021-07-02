import React from 'react'
import Link from 'next/link';
import SideBarAnimate from './sideBarAnimation';
import { AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import FooterSvg from '../Footer/footersvg';
import styled from 'styled-components';
import { rightSideVariant, socialContainer, item, sideLeftVariant, emailContainerItem } from './sideBarAnimationVar';
import { Email, EmailContainer, EmailDivider, EmailText, Links, Phone, PhoneText, SideBarContainer, SideBarLinks, SideBarMenu, SideLeft, SideRight } from './sidebarStyles';



const SideBar = ({ isOpen }) => {
    const isTabletScreen = useMediaQuery({
        query: '(max-device-width: 768px)'
    });
    return (
        <>
            <SideBarContainer>
                <SideBarAnimate isOpen={isOpen} >
                    <SideBarMenu >
                        <AnimatePresence><SideLeft variants={sideLeftVariant}></SideLeft></AnimatePresence>
                        <SideBarFooterSvg>
                            <FooterSvg />
                        </SideBarFooterSvg>
                        <SideBarLinks variants={socialContainer} initial='hidden' animate='show' exit='exit'>
                            <Links variants={item}><Link href='http://instagram.com'>Home</Link></Links>
                            <Links variants={item}><Link href=''>Services</Link></Links>
                            <Links variants={item}><Link href=''>Team</Link></Links>
                            <Links variants={item}><Link href=''>Our Work</Link></Links>
                        </SideBarLinks>
                        <AnimatePresence>
                            <SideRight layout variants={rightSideVariant} >
                                <EmailContainer layout variants={socialContainer}>
                                    <Email variants={emailContainerItem}>westlandvalley@gmail.com</Email>
                                    <EmailText layout variants={emailContainerItem}>Get In Touch With Us</EmailText>
                                    <EmailDivider layout variants={emailContainerItem}></EmailDivider>
                                    <Phone variants={emailContainerItem}>+233 546 075 591</Phone>
                                    <PhoneText layout variants={emailContainerItem}>The Fastest Way To Reach Us</PhoneText>
                                </EmailContainer>
                            </SideRight>
                            {
                                isTabletScreen && <SideBarRightResponsive>
                                    <EmailContainer layout variants={socialContainer}>
                                        <Email variants={emailContainerItem}>westlandvalley@gmail.com</Email>
                                        <EmailText layout variants={emailContainerItem}>Get In Touch With Us</EmailText>
                                        <Phone variants={emailContainerItem}>+233 546 075 591</Phone>
                                        <PhoneText layout variants={emailContainerItem}>The Fastest Way To Reach Us</PhoneText>
                                    </EmailContainer>
                                </SideBarRightResponsive>
                            }
                        </AnimatePresence>
                    </SideBarMenu>
                </SideBarAnimate>
            </SideBarContainer>


        </>
    )
}
const SideBarFooterSvg = styled.div`
    height: 1rem;
    width: 12.4rem;
    position: absolute;
    top: 5rem;
    left: 7rem;
    @media screen and (max-width: 768px){
        width: 11.8rem;
        left: 2.45rem;
    }
    @media screen and (min-width: 380px) and (max-width: 480px){
        width: 11rem;
        left: 5.2rem;
        top: 8rem;
    }
`


const SideBarRightResponsive = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 30vh;
    background-color: #262628;
    @media screen and (min-width: 380px) and (max-width: 480px){
        position: absolute;
        left: 0;
        width: 109vw;
    }

    
`



export default SideBar;
