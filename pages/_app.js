import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *,html{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  


  }
    
  &::-webkit-scrollbar {
    width: 11px;
  }

  &::-webkit-scrollbar-track {
  background: #f1f1f1;
 }

  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  

  body{
    margin: 0;
    

  }
 


`

function MyApp({ Component, pageProps }) {


  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />



    </>

  )
}

export default MyApp
