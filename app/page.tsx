import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hello, I'm Edward Yao</h1>
      <p className={styles.intro}>
        Computer Engineering student at UCSD. 
      </p>

      <h2 className={styles.sectionTitle}>Projects</h2>
      <ul className={styles.projectsList}>
        <li>
          <h3 className={styles.projectTitle}>Nothing to see here</h3>
          <p className={styles.projectDescription}>...yet</p>
        </li>
      </ul>
    </main>
  );
}
