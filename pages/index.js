import Layout from '../components/Layout';
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>LSR Creative</title>
        <meta name="description" content="Portfolio site of Logan Scandling Rundquist"/>
      </Head>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">LSR</h1>
          <hr/>
          <h1 className="hero-title">CREATIVE</h1>
        </div>
      </section>
      <section className="about">
        <div className="profile">
          <img className="profile-pic" src="/images/home/profile.jpeg" alt="Logan Rundquist's profile picture"/>
        </div>
        <div className="personal-info">
          <h1>About Me</h1>
          <p>Hi there! I’m a graphic and multimedia designer living in Austin, TX. I have a background in studio art, with a BA degree from Baylor University. I love being creative in many different forms of media!</p>
          <p>I’ve held many creative jobs since my school days in different industries, but I’ve settled into print and digital graphic design. Most recently, I went through School of Motion’s “Design Bootcamp”, and I’ve been exploring design for motion graphics.</p>
          <p>Formerly LoganTScanding, I changed my website to reflect my new married name of Rundquist.</p>
          <p><b>Download and view my resume by clicking the image below.</b></p>
        </div>
      </section>
      <section className="resume">
        <h2>Resume</h2>
        <a href="/images/home/LSR-Resume.pdf" download="Logan Rundquist Resume"><img className="resume-img" src="/images/home/resume.jpg" alt="Logan Rundquist's resume"/></a>
      </section>
    </Layout>
  );
}