import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FooterMenu from "./FooterMenu";

export default function FooterSideMenues({}) {
  // temporary will be fetched from DB later on
  const MenuesItems = {
    ourTeam: {
      title: "تیم ما",
      items: [
        ["درباره ما", "\\"],
        ["فرصت های شغلی", "\\"],
        ["اخبار و رویدادها", "\\"],
        ["تماس با ما", "\\"],
      ],
    },
    pops: {
      title: "مباحث پرطرفدار",
      items: [
        ["جبر و معادلات", "\\"],
        ["تایع و ساختمان داده", "\\"],
        ["لگاریتم چندگانه", "\\"],
        ["حد و پیوستگی", "\\"],
      ],
    },
    products: {
      title: "دیگر محصولات",
      items: [
        ["آزمونک ریاضی", "\\"],
        ["تست خودشناسی", "\\"],
        ["جزوات و جمع بندی", "\\"],
      ],
    },
  };
  
  return (
    <Grid id="footerLinks" container spacing={4} width="50%">
      {Object.keys(MenuesItems).map((key) => {
        return <FooterMenu key={key} menuData={MenuesItems[key]} />;
      })}
    </Grid>
  );
}