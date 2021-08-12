import styles from './about.module.css'

export default function About () {
  return (
    <section className={styles.about}>
      <div className={styles.profile}>
        <img className={styles.profilePic} src="/images/home/profile.jpg" alt="Logan Rundquist's profile picture"/>
      </div>
      <div>
        <h1>About Me</h1>
        <p>Hi there! I’m a graphic and multimedia designer living in Austin, TX. I have a background in studio art, with a BA degree from Baylor University. I love being creative in many different forms of media!</p>
        <p>I’ve held many creative jobs since my school days in different industries, but I’ve settled into print and digital graphic design. Most recently, I went through School of Motion’s “Design Bootcamp”, and I’ve been exploring design for motion graphics.</p>
        <p>Formerly Logan T. Scandling, I changed my website to reflect my new married name of Rundquist.</p>
        <p><b>Download and view my resume by clicking the image below.</b></p>
      </div>
    </section>
  );
}
