import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { container } from './sideBarAnimationVar';
import styled from 'styled-components';



const SideBarAnimate = ({ children, isOpen}) => {
    return (

        <AnimatePresence >

            {
                isOpen && <AlphaSideBarContainer
                    initial='hidden'
                    animate='show'
                    exit='exit'
                    variants={container}
                >
                    {children}
                </AlphaSideBarContainer>
            }

        </AnimatePresence>



    )
}
const AlphaSideBarContainer = styled(motion.div)`
    width: 100vw;
    height: max-content;

`

export default SideBarAnimate;