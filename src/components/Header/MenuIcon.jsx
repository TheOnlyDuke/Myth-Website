import { memo } from "react";

export const MenuIcon = memo(() => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="4" rx="2" fill="currentColor" />
    <rect y="16" width="20" height="4" rx="2" fill="currentColor" />
    <rect y="8" width="13" height="4" rx="2" fill="currentColor" />
  </svg>
));

MenuIcon.displayName = "MenuIcon";
