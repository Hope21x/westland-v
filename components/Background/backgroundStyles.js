import styled from 'styled-components';




export const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-attachment: fixed;
    background-image: linear-gradient(to top, #2F353BCE, #4B134F73);
    z-index: 1;
    @media screen and (max-width: 500px){
        background-image: linear-gradient(to bottom, #2F353BD3, #4B134F73);
    }

`
export const ImageContainer = styled.video`
   position: fixed;
   filter: brightness(40%);
   width: 100%;
   height: 100%;
   background-attachment: fixed;
   background-repeat: no-repeat;
   background-position: center center;
   object-fit: cover;
   z-index: -1;
   
`