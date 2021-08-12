import Layout from '../components/Layout';
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Resume from '../components/resume/Resume'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>LSR Creative</title>
        <meta name="description" content="Portfolio site of Logan Scandling Rundquist"/>
      </Head>
      <Hero />
      <About />
      <Resume />
    </Layout>
  );
}