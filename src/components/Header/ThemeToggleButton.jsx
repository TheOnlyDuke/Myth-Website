import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@/app/theme/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        margin: "15px",
      }}
    >
      <IconButton
        color="inherit"
        aria-label="toggle theme"
        sx={{
          padding: 0,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        {isDarkMode ? (
          <Brightness7 
            sx={{ fontSize: 32, cursor: 'pointer' }} 
          />
        ) : (
          <Brightness4 
            sx={{ fontSize: 32, cursor: 'pointer' }}
          />
        )}
      </IconButton>
    </motion.div>
  );
};

export default ThemeToggle;