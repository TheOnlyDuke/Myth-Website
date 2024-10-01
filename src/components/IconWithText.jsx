'use client';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Icons from './Icons';  // Adjust the import path as necessary

const IconWithText = ({ iconPath, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const textStyle = {
    marginLeft: '8px',
    color: isHovered ? 'var(--active-text)' : 'var(--secondary-text)',
    transition: 'color 0.3s ease',
  };

  return (
    <Box
      component="li"
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icons d={iconPath} isHovered={isHovered} />
      <Typography variant='normalBody' style={textStyle}>{text}</Typography>
    </Box>
  );
};

export default IconWithText;