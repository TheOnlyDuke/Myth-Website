import { Box } from "@mui/material";
import IMItems from "./IMItems";
import { HeroCompetition, HeroManWithCalc, HeroScore } from "@/utils/icons";

const menuDatas = [
  {
    title: (
      <>
        با بازی{" "}
        <span style={{ color: "var(--secondary-active-BG)" }}>ریاضی</span> یاد
        بگیرید
      </>
    ),
    desc: "مجموعه فلان با استفاده از جدید‌ترین متد ها مباحث غیر قابل فهم ریاضی را در حین بازی کردن و حل مثال به شما آموزش می‌دهد.",
    picture: <HeroManWithCalc />,
  },
  {
    title: (
      <>
        <span style={{ color: "var(--third-active-BG)" }}>رقابت</span> با بقیه
        دانشجو ها
      </>
    ),
    desc: "مجموعه فلان با استفاده از جدید‌ترین متد ها مباحث غیر قابل فهم ریاضی را در حین بازی کردن و حل مثال به شما آموزش می‌دهد.",
    picture: <HeroCompetition />,
  },
  {
    title: (
      <>
        دریافت <span style={{ color: "var(--active-BG)" }}>امتیاز</span> با حل
        سوالات
      </>
    ),
    desc: "مجموعه فلان با استفاده از جدید‌ترین متد ها مباحث غیر قابل فهم ریاضی را در حین بازی کردن و حل مثال به شما آموزش می‌دهد.",
    picture: <HeroScore />,
  },
];

export default function IntroductionMenu() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "100px",
        p: "0 25px",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {menuDatas.map(({ title, desc, picture }, index) => (
        <IMItems
          key={index}
          title={title}
          desc={desc}
          picture={picture}
          direc={index % 2 ? "rtl" : "ltr"}
        />
      ))}
    </Box>
  );
}
