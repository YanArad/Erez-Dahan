import { useTheme } from '../theme/ThemeContext';
import { THEME_DARK } from '../theme/themeConstants';
import styles from './DarkModeToggle.module.css';

const TOOLTIP_TEXT = 'Toggle Dark Mode';
const SCREEN_READER_LABEL = 'Toggle dark mode';
const SUN_ICON = '\u2600';
const MOON_ICON = '\u263E';

export function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === THEME_DARK;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={SCREEN_READER_LABEL}
      title={TOOLTIP_TEXT}
      className={styles.toggle}
      onClick={toggleTheme}
    >
      <span aria-hidden="true" className={styles.icon}>
        {isDark ? MOON_ICON : SUN_ICON}
      </span>
      <span aria-hidden="true" className={isDark ? styles.trackOn : styles.track}>
        <span className={styles.thumb} />
      </span>
    </button>
  );
}
