import styles from './hero.module.css'

export default function Hero () {
  return (
    <section className={styles.hero}>
      <div className={styles.animatedTitle}>
        <div className={styles.textTop}>
          <div>
            <span>LSR</span>
          </div>
        </div>
        <div className={styles.textBottom}>
          <div>CREATIVE</div>
        </div>
      </div>
      <i className={`fas fa-chevron-down ${styles.chevron}`}></i>
    </section>
  );
}
