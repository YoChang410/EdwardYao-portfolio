import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hello, I'm Edward Yao</h1>
      <p className={styles.intro}>
        Computer Engineering student at UCSD. Interested in software.
      </p>

      <h2 className={styles.sectionTitle}>Projects</h2>
      <ul className={styles.projectsList}>
        <li>
          <h3 className={styles.projectTitle}>Project 1</h3>
          <p className={styles.projectDescription}>Short description of what it does.</p>
        </li>
      </ul>
    </main>
  );
}
