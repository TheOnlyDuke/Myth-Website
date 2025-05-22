import { Typography, Box } from "@mui/material";
import { TopSubjects } from "@/utils/dummydatas";
import IconWithText from "@/components/IconWithText";
import Image from "next/image";
import Link from "next/link";

export default function SubjectIntroMenu() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        direction: "rtl",
        gap: { xs: "var(--gap)", sm: undefined },
      }}
    >
      <Typography variant="title">
        <span style={{ display: "block", color: "inherit" }}>مباحث متنوع،</span>
        گسترده و عمیق
      </Typography>
      <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {TopSubjects.map((each, index) => (
          <li
            key={index}
            style={{ listStyle: "none", display: "flex", gap: "10px" }}
          >
            <Image src={each.icon} width={28} height={28} alt={each.name} />
            <Typography variant="normalBody">{each.name}</Typography>
          </li>
        ))}
      </ul>
      <Link href="\learning" style={{ cursor: "pointer" }}>
        <IconWithText
          link={true}
          baseColor="var(--secondary-text)"
          hoverable={false}
          iconPath="M9.5 0.90625C9.7072 0.90625 9.90591 0.98856 10.0524 1.13507C10.1989 1.28159 10.2812 1.4803 10.2812 1.6875V8.71875H17.3125C17.5197 8.71875 17.7184 8.80106 17.8649 8.94757C18.0114 9.09409 18.0938 9.2928 18.0938 9.5C18.0938 9.7072 18.0114 9.90591 17.8649 10.0524C17.7184 10.1989 17.5197 10.2812 17.3125 10.2812H10.2812V17.3125C10.2812 17.5197 10.1989 17.7184 10.0524 17.8649C9.90591 18.0114 9.7072 18.0938 9.5 18.0938C9.2928 18.0938 9.09409 18.0114 8.94757 17.8649C8.80106 17.7184 8.71875 17.5197 8.71875 17.3125V10.2812H1.6875C1.4803 10.2812 1.28159 10.1989 1.13507 10.0524C0.98856 9.90591 0.90625 9.7072 0.90625 9.5C0.90625 9.2928 0.98856 9.09409 1.13507 8.94757C1.28159 8.80106 1.4803 8.71875 1.6875 8.71875H8.71875V1.6875C8.71875 1.4803 8.80106 1.28159 8.94757 1.13507C9.09409 0.98856 9.2928 0.90625 9.5 0.90625Z"
          text="مباحث بیشتر در اینده..."
        />
      </Link>
    </Box>
  );
}
