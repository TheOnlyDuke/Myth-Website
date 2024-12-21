"use client";
import { forwardRef, useState, useEffect } from "react";
import { SvgIcon } from "@mui/material";
import { memo } from "react";
import { useTheme } from "@/app/theme/ThemeContext";

const defaultIconModule = (props, path) => (
  <SvgIcon
    {...props}
    sx={{
      "& path": {
        stroke: "var(--primary-text)",
        transition: "stroke 0.3s ease",
      },
      "&:hover path": {
        stroke: "var(--activeText)",
      },
      ...props.sx,
    }}
  >
    <svg fill="none">
      <path
        d={path}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </SvgIcon>
);

const SVGFileWrapper = forwardRef(
  ({ svgPath, darkSvgPath, width, height, ...otherProps }, ref) => {
    const { isDarkMode } = useTheme();
    const [imagePath, setImagePath] = useState(svgPath);

    useEffect(() => {
      const newPath = isDarkMode && darkSvgPath ? darkSvgPath : svgPath;
      setImagePath(newPath);
    }, [isDarkMode, svgPath, darkSvgPath]);

    return (
      <SvgIcon
        {...otherProps}
        viewBox={`0 0 ${width} ${height}`}
        sx={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        ref={ref}
      >
        <image href={imagePath} width={width} height={height} />
      </SvgIcon>
    );
  }
);

const createSvgIcon = (
  svgPath,
  defaultWidth = 24,
  defaultHeight = 24,
  hasDarkVersion = false
) => {
  return memo((props) => (
    <SVGFileWrapper
      {...props}
      svgPath={`/svg/${svgPath}.svg`}
      darkSvgPath={hasDarkVersion ? `/svg/${svgPath}Dark.svg` : null}
      width={props.width || defaultWidth}
      height={props.height || defaultHeight}
    />
  ));
};

export const ArrowLeft = (props) =>
  defaultIconModule(
    { ...props, stroke: "var(--primary-text)" },
    "M7.625 14.875L0.75 8M0.75 8L7.625 1.125M0.75 8H17.25"
  );

export const OpenBook = (props) =>
  defaultIconModule(
    { ...props, stroke: "var(--primary-text)" },
    "M12 4.55251C9.93951 2.70421 7.268 1.68369 4.5 1.68751C3.185 1.68751 1.9225 1.91251 0.75 2.32751V20.14C1.95453 19.715 3.22271 19.4986 4.5 19.5C7.38125 19.5 10.01 20.5838 12 22.365M12 4.55251C14.0604 2.70411 16.732 1.68357 19.5 1.68751C20.815 1.68751 22.0775 1.91251 23.25 2.32751V20.14C22.0455 19.715 20.7773 19.4986 19.5 19.5C16.732 19.4962 14.0605 20.5167 12 22.365M12 4.55251V22.365"
  );

export const RescueTube = (props) =>
  defaultIconModule(
    { ...props, stroke: "var(--primary-text)" },
    "M17.89 2.41249C18.6397 2.87423 19.3328 3.42212 19.955 4.04499C20.5925 4.68249 21.135 5.37499 21.5875 6.10999M17.89 2.41249L13.58 7.58499M17.89 2.41249C16.1177 1.32567 14.0791 0.750427 12 0.750427C9.92098 0.750427 7.88244 1.32567 6.11005 2.41249M21.5875 6.10999L16.415 10.42M21.5875 6.10999C22.6744 7.88238 23.2496 9.92092 23.2496 12C23.2496 14.0791 22.6744 16.1176 21.5875 17.89M13.58 7.58499C14.2328 7.81837 14.8255 8.19412 15.3151 8.68499C15.806 9.1745 16.1817 9.76718 16.415 10.42M13.58 7.58499C12.5582 7.22079 11.4419 7.22079 10.42 7.58499M6.11005 2.41249L10.42 7.58499M6.11005 2.41249C5.36036 2.8742 4.66731 3.4221 4.04505 4.04499C3.42216 4.66726 2.87427 5.36031 2.41255 6.10999M16.415 10.42C16.7792 11.4418 16.7792 12.5581 16.415 13.58M21.5875 17.89L16.415 13.58M21.5875 17.89C21.1258 18.6397 20.5779 19.3327 19.955 19.955C19.3176 20.5925 18.625 21.135 17.89 21.5875M16.415 13.58C16.1888 14.2125 15.8213 14.8075 15.3151 15.315C14.8255 15.8059 14.2329 16.1816 13.58 16.415M10.42 7.58499C9.76724 7.81833 9.17457 8.19409 8.68505 8.68499C8.1788 9.19249 7.8113 9.78749 7.58505 10.42M13.58 16.415L17.89 21.5875M13.58 16.415C12.5582 16.7792 11.4419 16.7792 10.42 16.415M17.89 21.5875C16.1177 22.6743 14.0791 23.2495 12 23.2495C9.92098 23.2495 7.88244 22.6743 6.11005 21.5875M6.11005 21.5875L10.42 16.415M6.11005 21.5875C5.36036 21.1258 4.66731 20.5779 4.04505 19.955C3.42218 19.3327 2.87429 18.6397 2.41255 17.89M10.42 16.415C9.76724 16.1816 9.17457 15.8059 8.68505 15.315C8.19418 14.8254 7.81843 14.2328 7.58505 13.58M7.58505 13.58L2.41255 17.89M7.58505 13.58C7.22085 12.5581 7.22085 11.4418 7.58505 10.42M2.41255 17.89C1.32573 16.1176 0.750488 14.0791 0.750488 12C0.750488 9.92092 1.32573 7.88238 2.41255 6.10999M2.41255 6.10999L7.58505 10.42"
  );

export const Pencil = (props) =>
  defaultIconModule(
    { ...props, stroke: "var(--primary-text)" },
    "M19.0775 3.60875L21.1862 1.49875C21.6258 1.05916 22.2221 0.812195 22.8438 0.812195C23.4654 0.812195 24.0617 1.05916 24.5013 1.49875C24.9408 1.93835 25.1878 2.53457 25.1878 3.15625C25.1878 3.77794 24.9408 4.37416 24.5013 4.81375L6.54 22.775C5.87916 23.4355 5.06421 23.9209 4.16875 24.1875L0.8125 25.1875L1.8125 21.8313C2.0791 20.9358 2.56454 20.1208 3.225 19.46L19.0788 3.60875H19.0775ZM19.0775 3.60875L22.375 6.90625"
  );

export const Layers = (props) =>
  defaultIconModule(
    { ...props, stroke: "var(--primary-text)" },
    "M17.625 7.3125V4.5C17.625 3.75408 17.3287 3.03871 16.8012 2.51126C16.2738 1.98382 15.5584 1.6875 14.8125 1.6875H4.5C3.75408 1.6875 3.03871 1.98382 2.51126 2.51126C1.98382 3.03871 1.6875 3.75408 1.6875 4.5V14.8125C1.6875 15.5584 1.98382 16.2738 2.51126 16.8012C3.03871 17.3287 3.75408 17.625 4.5 17.625H7.3125M17.625 7.3125H19.5C20.2459 7.3125 20.9613 7.60882 21.4887 8.13626C22.0162 8.66371 22.3125 9.37908 22.3125 10.125V19.5C22.3125 20.2459 22.0162 20.9613 21.4887 21.4887C20.9613 22.0162 20.2459 22.3125 19.5 22.3125H10.125C9.37908 22.3125 8.66371 22.0162 8.13626 21.4887C7.60882 20.9613 7.3125 20.2459 7.3125 19.5V17.625M17.625 7.3125H10.125C9.37908 7.3125 8.66371 7.60882 8.13626 8.13626C7.60882 8.66371 7.3125 9.37908 7.3125 10.125V17.625"
  );

export const HeroManWithCalc = createSvgIcon("heroManWithCalc", 450, 450, true);
export const HeroCompetition = createSvgIcon("heroCompetition", 450, 450, true);
export const HeroScore = createSvgIcon("heroScore", 450, 450, true);
