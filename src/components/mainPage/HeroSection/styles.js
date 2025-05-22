export const heroStyles = {
  container: {
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    marginTop: "100px",
  },
  wrapper: {
    display: "flex",
    height: {
      xs: "fit-content",
      sm: "605px",
    },
    flexDirection: {
      xs: "column",
      sm: "row",
    },
    gap: {
      xs: "var(--gap)",
      sm: 0,
    },
    justifyContent: "space-between",
  },
  imageContainer: {
    position: "relative",
    margin: {
      xs: "auto",
      sm: 0,
    },
    width: {
      xs: "90%",
      sm: "470px",
    },
    aspectRatio: "320/420",
    "::after": {
      content: `"ارشمیدش، پدر علم ریاضی"`,
      opacity: 0,
      color: "var(--secondary-text)",
      transition: "all 250ms ease-in-out",
      position: "absolute",
      bottom: "2px",
      right: "7px",
    },
    ":hover": {
      "::after": {
        opacity: 100,
        bottom: "7px",
        right: "12px",
      },
    },
  },
  content: {
    width: { xs: "100%", sm: "42.5%" },
    gap: { xs: "30px", sm: undefined },
    direction: "rtl",
    justifyContent: "space-evenly !important",
  },
  title: {
    width: {
      xs: "75%",
      sm: "auto",
    },
  },
  description: {
    color: "text.secondary",
  },
  button: {
    width: "195px",
    height: "65px",
  },
};
