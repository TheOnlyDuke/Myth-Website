import { createTheme } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";

const customBreakpoints = {
  values: {
    xs: 320,
    sm: 768,
    md: 1200,
    lg: 1440,
    lgp: 1441,
    xl: 1920,
    xlp: 1921,
  },
};

const buttonStyle = {
  styleOverrides: {
    root: {
      fontFamily: "IRANYekanX, sans-serif",
      fontSize: "17px",
      backgroundColor: "var(--active-BG)",
      color: "white",
      padding: "14px",
      borderRadius: "10px",
      "&:hover": {
        backgroundColor: "var(--black-BG)",
      },
    },
  },
};

const muiTextField = {
  styleOverrides: {
    root: {
      margin: 0,
      marginTop: "10px",
      "& label": {
        right: 30,
        left: "auto",
        transformOrigin: "top right",
        fontFamily: "IRANYekanX, sans-serif",
      },
      "& legend": {
        textAlign: "right",
        right: 15,
      },
      '& input[type="tel"]': {
        textAlign: "right",
        direction: "rtl",
      },
      "& .MuiInputBase-root": {
        fontFamily: "IRANYekanX, sans-serif",
      },
      "& .MuiInputBase-input": {
        fontFamily: "IRANYekanX, sans-serif",
      },
    },
  },
};

const muiOutlinedInput = {
  styleOverrides: {
    root: {
      borderRadius: "12px",
      fontFamily: "IRANYekanX, sans-serif",
      "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "12px",
      },
      "& input": {
        fontFamily: "IRANYekanX, sans-serif",
      },
    },
  },
};

const ArrowDropDownIcon = (props) => (
  <SvgIcon {...props} sx={{ width: "15px", height: "10px" }}>
    <svg
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.48577 8.92339C8.35687 9.05214 8.18213 9.12445 7.99994 9.12445C7.81775 9.12445 7.64301 9.05214 7.51411 8.92339L0.639107 2.04839C0.517667 1.91807 0.451554 1.74569 0.454697 1.56758C0.457839 1.38947 0.529992 1.21953 0.655954 1.09357C0.781916 0.967611 0.951852 0.895458 1.12996 0.892316C1.30807 0.889173 1.48045 0.955286 1.61077 1.07673L7.99994 7.46589L14.3891 1.07673C14.452 1.00918 14.5279 0.955003 14.6123 0.917427C14.6966 0.879851 14.7877 0.859646 14.88 0.858017C14.9723 0.856388 15.064 0.873369 15.1496 0.907947C15.2352 0.942524 15.3129 0.99399 15.3782 1.05927C15.4435 1.12456 15.495 1.20232 15.5296 1.28793C15.5641 1.37353 15.5811 1.46523 15.5795 1.55754C15.5779 1.64985 15.5577 1.74089 15.5201 1.82522C15.4825 1.90955 15.4283 1.98545 15.3608 2.04839L8.48577 8.92339Z"
        fill="#969696"
      />
    </svg>
  </SvgIcon>
);

const muiAutoComplete = {
  defaultProps: {
    popupIcon: <ArrowDropDownIcon />,
    clearIcon: null,
  },
  styleOverrides: {
    root: {
      direction: "rtl",
      "& .MuiOutlinedInput-root": {
        borderRadius: "10px",
      },
    },
    inputRoot: {
      paddingLeft: "65px !important",
      paddingRight: "14px !important",
      fontFamily: "IRANYekanX, sans-serif",
    },
    input: {
      fontFamily: "IRANYekanX, sans-serif",
    },
    endAdornment: {
      right: "auto",
      left: 20,
      top: "calc(50%)",
      display: "flex",
      flexDirection: "row-reverse",
    },
    clearIndicator: {
      marginRight: 0,
      marginLeft: -2,
    },
    popupIndicator: {
      marginRight: 0,
      marginLeft: -2,
    },
    paper: {
      direction: "rtl",
    },
    option: {
      direction: "rtl",
      fontFamily: "IRANYekanX, sans-serif",
    },
  },
};

const muiLinearProgress = {
  styleOverrides: {
    root: {
      transform: "rotate(180deg)",
    },
    bar: {
      transform: "rotate(180deg)",
    },
  },
};

const muiCssBaseline = {
  styleOverrides: `
  @font-face {
    font-family: IRANYekanX;
	  font-style: normal;
	  font-weight: normal;
	  src: url('/fonts/woff/IRANYekanX-Regular.woff') format('woff'),   
	  url('/fonts/woff2/IRANYekanX-Regular.woff2') format('woff2');	
  }

  * {
    font-family: "IRANYekanX", sans-serif;
  }
`,
};

const muiTypography = {
  defaultProps: {
    variantMapping: {
      display: "h1",
      title: "h2",
      normalBody: "p",
      smallBody: "p",
    },
  },
};

const componentsStyles = {
  MuiButton: buttonStyle,
  MuiTextField: muiTextField,
  MuiAutocomplete: muiAutoComplete,
  MuiLinearProgress: muiLinearProgress,
  MuiOutlinedInput: muiOutlinedInput,
  MuiTypography: muiTypography,
  MuiCssBaseline: muiCssBaseline,
};

const getTypography = (theme) => ({
  fontFamily: "IRANYekanX, sans-serif",
  fontSize: "15px",
  lineHeight: "180%",
  allVariants: {
    fontFamily: "IRANYekanX, sans-serif",
    lineHeight: "180%",
  },
  display: {
    fontFamily: "IRANYekanX, sans-serif",
    fontSize: "60px",
    fontWeight: "1000",
    letterSpacing: "-0.5pt",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      fontWeight: "950",
    },
  },
  title: {
    fontFamily: "IRANYekanX, sans-serif",
    fontSize: "40px",
    fontWeight: "950",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  smallTitle: {
    fontFamily: "IRANYekanX, sans-serif",
    fontSize: "20px",
    fontWeight: "700"
  },
  normalBody: {
    fontFamily: "IRANYekanX, sans-serif",
    fontSize: "17px",
    fontWeight: "500",
  },
  normalBodyCap: {
    fontFamily: "IRANYekanX, sans-serif",
    fontSize: "17px",
    fontWeight: "500",
    color: "#808080",
  },
  smallBody: {
    fontFamily: "IRANYekanX, sans-serif",
    fontSize: "15px",
  },
  smallBodyCap: {
    fontFamily: "IRANYekanX, sans-serif",
    fontSize: "15px",
    color: "#808080"
  }
});

const createCustomTheme = (mode) => {
  const themeBase = createTheme({
    palette:
      mode === "light"
        ? {
            mode: "light",
            primary: {
              main: "#462BEF",
            },
            secondary: {
              main: "#808080",
            },
            background: {
              default: "#fff",
              paper: "#f5f5f5",
            },
            text: {
              primary: "#1E1E1E",
              secondary: "#808080",
            },
            custom: {
              activeText: "#fff",
              notActiveBG: "#fff",
              activeBG: "#462BEF",
              redBG: "#FF002F",
              orangeBG: "#EFA71F",
              blackBG: "#000000",
              footerBG: "#000000",
              border: "#E2E2E2",
            },
          }
        : {
            mode: "dark",
            primary: {
              main: "#6D59FF",
            },
            secondary: {
              main: "#A0A0A0",
            },
            background: {
              default: "#101010",
              paper: "#151515",
            },
            text: {
              primary: "#FFFFFF",
              secondary: "#B0B0B0",
            },
            custom: {
              activeText: "#000000",
              notActiveBG: "#2C2C2C",
              activeBG: "#6D59FF",
              redBG: "#FF3355",
              orangeBG: "#ebc379",
              blackBG: "#FFF",
              footerBG: "#FFF",
              border: "#3d3d3d",
            },
          },
    breakpoints: customBreakpoints,
  });

  return createTheme(themeBase, {
    components: componentsStyles,
    typography: getTypography(themeBase),
  });
};

export const lightTheme = createCustomTheme("light");
export const darkTheme = createCustomTheme("dark");
