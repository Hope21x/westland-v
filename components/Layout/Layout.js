import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Background from '../Background';
const Layout = ({ children }) => {
    return (
        <>
            
            <LayoutContainer>
                    <Background/>
                    <NavBar />
                        {children}
                    <Footer /> 
            </LayoutContainer>



        </>
    )
}

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
`





export default Layout;
