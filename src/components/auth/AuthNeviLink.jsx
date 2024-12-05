import Link from "next/link";
import { ArrowLeft } from "@/utils/icons";

export default function AuthNeviLink({ text, des = "/" }) {
  return (
    <Link
      href={des}
      style={{
        color: "var(--secondary-text)",
        position: "relative",
        margin: "5px 0",
        cursor: "pointer",
      }}
    >
      {text}
      <ArrowLeft
        sx={{
          width: "20px",
          height: "18px",
          position: "absolute",
          left: "-20px",
          top: "8px",
          stroke: "var(--secondary-text)",
          cursor: "pointer",
        }}
      />
    </Link>
  );
}
