export default function Icons({
  d,
  isHovered,
  hoverable = true,
  baseColor = "var(--active-text)",
  link = true
}) {
  const iconStyle = {
    stroke: !hoverable
      ? baseColor
      : isHovered
      ? "var(--black-BG)"
      : "var(--secondary-text)",
    fill: !hoverable ? "none" : isHovered ? baseColor : "none",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    transition: "all 0.3s ease",
    cursor: "inherit",
    margin: "5px",
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" style={iconStyle}>
      <path d={d} />
    </svg>
  );
}
