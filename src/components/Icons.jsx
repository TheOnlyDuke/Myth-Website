const IconsCSS = `
  .icon {
    transition: all 0.3s ease;
    cursor: pointer;
    margin: 5px;
  }
`;

export default function Icons({ d, isHovered }) {
  const iconStyle = {
    stroke: isHovered ? "var(--black-BG)" : "var(--secondary-text)",
    fill: isHovered ? "var(--active-text)" : "none",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
  };

  return (
    <>
      <style>{IconsCSS}</style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        style={iconStyle}
      >
        <path d={d} />
      </svg>
    </>
  );
}
