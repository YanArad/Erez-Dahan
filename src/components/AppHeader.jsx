import { DarkModeToggle } from './DarkModeToggle';
import styles from './AppHeader.module.css';

const PROFILE_ICON = '\u{1F464}';

export function AppHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My Application</h1>
      <div className={styles.actions}>
        <DarkModeToggle />
        <span aria-hidden="true" className={styles.profile}>
          {PROFILE_ICON}
        </span>
      </div>
    </header>
  );
}
