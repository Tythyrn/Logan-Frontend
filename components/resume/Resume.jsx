import styles from './resume.module.css'

export default function Resume () {
  return (
    <section className={styles.resume}>
      <h2 className={styles.resumeHeader}>Resume</h2>
      <a href="/images/home/LSR-Resume.pdf" download="Logan Rundquist Resume"><img className={styles.resumeImg} src="/images/home/resume.jpg" alt="Logan Rundquist's resume"/></a>
    </section>
  );
}
