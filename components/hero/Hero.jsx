import styles from './hero.module.css'

export default function Hero () {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>LSR</h1>
        <hr className={styles.line} />
        <h1 className={styles.heroTitle}>CREATIVE</h1>
      </div>
      <i className={`fas fa-chevron-down ${styles.chevron}`}></i>
    </section>
  );
}
