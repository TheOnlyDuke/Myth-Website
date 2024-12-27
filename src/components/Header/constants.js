export const HEADER_STYLES = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  signUpButton: {
    width: "150px",
    height: "65px",
    m: "5px",
    marginLeft: "0",
    backgroundColor: "var(--activeBG)",
    borderRadius: "15px",
    color: "var(--activeText)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 250ms ease-in-out",
    ":hover": {
      backgroundColor: "var(--blackBG)",
      cursor: "pointer",
    },
  },
  menu: {
    backdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
    container: {
      position: "fixed",
      top: "105px",
      left: 0,
      width: "100%",
      backgroundColor: "var(--notActiveBG)",
      padding: "16px",
      zIndex: 1001,
      boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2)",
    },
  },
};

export const NAVIGATION_ITEMS = [
  { href: "/learning", label: "مباحث", menuId: "subjects" },
  { href: "/blogs", label: "وبلاگ", menuId: "blogs" },
  { href: "/leaderboard", label: "لیدربورد" },
];
