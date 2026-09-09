import { ThemeProvider } from './theme/ThemeContext';
import { AppHeader } from './components/AppHeader';
import './theme/theme.css';

export function App() {
  return (
    <ThemeProvider>
      <AppHeader />
      <main>
        <p>Use the toggle in the header to switch between light and dark mode.</p>
      </main>
    </ThemeProvider>
  );
}
