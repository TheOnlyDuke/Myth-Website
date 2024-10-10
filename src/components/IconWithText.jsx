'use client';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Icons from './Icons';

const IconWithText = ({iconPath, text, hoverable = true, baseColor = 'var(--active-text)', link=true }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: link ? 'pointer': "",
    transition: 'all 0.3s ease',
  };

  const textStyle = {
    marginLeft: '8px',
    color: !hoverable? baseColor : isHovered ? baseColor : 'var(--secondary-text)',
    transition: 'color 0.3s ease',
  };

  return (
    <Box
      component="li"
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icons d={iconPath} isHovered={isHovered} hoverable={hoverable} baseColor={baseColor} link={link} />
      <Typography variant='normalBody' style={textStyle}>{text}</Typography>
    </Box>
  );
};

export default IconWithText;