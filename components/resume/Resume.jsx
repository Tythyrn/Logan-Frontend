import styles from './resume.module.css'

export default function Resume () {
  return (
    <section className={styles.resume}>
      <h2 className={styles.resumeHeader}>Resume</h2>
      <a href="https://media.graphcms.com/eBnaJCEHRY2itoWgHcKI" download="Logan Rundquist Resume"><img className={styles.resumeImg} src="https://media.graphcms.com/otkKYBVWRaiNco0SKjaw" alt="Logan Rundquist's resume"/></a>
    </section>
  );
}
