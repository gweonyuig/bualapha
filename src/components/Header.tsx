import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftGroup}>
          <Link href="/" className={styles.logo}>
            BUALAPHA
          </Link>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>홈</Link>
            <Link href="/about" className={styles.navLink}>소개</Link>
            <Link href="/projects" className={styles.navLink}>프로젝트</Link>
            <Link href="/contact" className={styles.navLink}>연락처</Link>
          </nav>
        </div>
        <button className={styles.profileButton}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.profileIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>
    </header>
  );
}