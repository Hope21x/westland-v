import Head from 'next/head'
import Header from '../components/Header';
import Layout from '../components/Layout/Layout';


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header/>
      </Layout>
      

      
     
    </>



  );
}