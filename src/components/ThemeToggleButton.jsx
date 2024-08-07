import { Button } from '@mui/material';
import { useTheme } from '@/app/theme/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <input type='checkbox' onClick={toggleTheme} />
  );
};

export default ThemeToggle;