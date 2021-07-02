import React from 'react';
import { HeaderContainer, HeaderWrap, HeaderTitle, HeaderIntro, ButtonWrap, Button, Arrow } from './headerStyles';
import { container, item } from './headerAnimation';



const Header = () => {
    return (
        <>

            <HeaderContainer>

                <HeaderWrap variants={container} initial='hidden' animate='show'>
                    <HeaderTitle variants={item}>
                        <h1>Westland Valley: consectetur adipiscing elit </h1>
                    </HeaderTitle>
                    <HeaderIntro variants={item}>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</h3>
                    </HeaderIntro>
                    <ButtonWrap variants={item}>
                        <Button>
                            Learn More
                        </Button>
                        <Arrow />
                    </ButtonWrap>
                </HeaderWrap>
            </HeaderContainer>


        </>
    );
}

export default Header;