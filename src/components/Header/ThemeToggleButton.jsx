import { Button } from '@mui/material';
import { useTheme } from '@/app/theme/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <input type='checkbox' onClick={toggleTheme} style={{position: "absolute", top: "15px", left: "15px"}}/>
  );
};

export default ThemeToggle;