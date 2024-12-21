import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import IconWithText from "../IconWithText";

export default function FooterContactMenu({}) {
  const iconWithText = [
    {
      path: "M1.34375 6.03125C1.34375 14.6604 8.33958 21.6562 16.9687 21.6562H19.3125C19.9341 21.6562 20.5302 21.4093 20.9698 20.9698C21.4093 20.5302 21.6562 19.9341 21.6562 19.3125V17.8833C21.6562 17.3458 21.2906 16.8771 20.7688 16.7469L16.1615 15.5948C15.7031 15.4802 15.2219 15.6521 14.9396 16.0292L13.9292 17.376C13.6354 17.7677 13.1281 17.9406 12.6687 17.7719C10.9634 17.1449 9.41474 16.1548 8.12998 14.87C6.84522 13.5853 5.85508 12.0366 5.22812 10.3312C5.05937 9.87187 5.23229 9.36458 5.62396 9.07083L6.97083 8.06042C7.34896 7.77812 7.51979 7.29583 7.40521 6.83854L6.25312 2.23125C6.18973 1.97781 6.04346 1.75282 5.83755 1.59202C5.63165 1.43122 5.37792 1.34384 5.11667 1.34375H3.6875C3.0659 1.34375 2.46976 1.59068 2.03022 2.03022C1.59068 2.46976 1.34375 3.0659 1.34375 3.6875V6.03125Z",
      text: "021-33232354",
    },
    {
      path: "M21.6562 4.03125V14.9687C21.6562 15.5904 21.4093 16.1865 20.9698 16.626C20.5302 17.0656 19.9341 17.3125 19.3125 17.3125H3.6875C3.0659 17.3125 2.46976 17.0656 2.03022 16.626C1.59068 16.1865 1.34375 15.5904 1.34375 14.9687V4.03125M21.6562 4.03125C21.6562 3.40965 21.4093 2.81351 20.9698 2.37397C20.5302 1.93443 19.9341 1.6875 19.3125 1.6875H3.6875C3.0659 1.6875 2.46976 1.93443 2.03022 2.37397C1.59068 2.81351 1.34375 3.40965 1.34375 4.03125M21.6562 4.03125V4.28437C21.6563 4.68453 21.5539 5.07803 21.3588 5.42739C21.1637 5.77676 20.8824 6.07035 20.5417 6.28021L12.7292 11.0875C12.3596 11.3151 11.9341 11.4357 11.5 11.4357C11.0659 11.4357 10.6404 11.3151 10.2708 11.0875L2.45833 6.28125C2.11763 6.07139 1.83632 5.7778 1.64122 5.42843C1.44611 5.07907 1.34371 4.68557 1.34375 4.28542V4.03125",
      text: "info@myth.ir",
    },
    {
      path: "M10.5 18.0937C15.6771 18.0937 19.875 14.2458 19.875 9.5C19.875 4.75417 15.6771 0.90625 10.5 0.90625C5.32292 0.90625 1.125 4.75417 1.125 9.5C1.125 11.6917 2.01979 13.6906 3.49271 15.2083C3.94271 15.674 4.26354 16.2917 4.10313 16.9177C3.92747 17.6023 3.59872 18.238 3.14167 18.7771C3.50744 18.8428 3.87837 18.8755 4.25 18.875C5.58542 18.875 6.82292 18.4562 7.83854 17.7427C8.68229 17.9719 9.57604 18.0937 10.5 18.0937Z",
      text: "09362341134 - 24 ساعته هر روز هفته",
    },
  ];

  const titlesStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "var(--activeText)",
    marginBottom: "35px",
  };

  return (
    <Grid id="footerAddressBox">
      <Box id="footerLogo" sx={titlesStyle}>
        لوگو تیم
      </Box>
      <Box component="ul" aria-labelledby="footerLogo">
        {iconWithText.map((item) => (
          <IconWithText
            key={item.text}
            iconPath={item.path}
            text={item.text}
            link={false}
          />
        ))}
      </Box>
    </Grid>
  );
}
