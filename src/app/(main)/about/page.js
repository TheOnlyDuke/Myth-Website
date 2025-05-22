import TeamContainer from "@/components/About/TeamContainer";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import { staffData } from "@/utils/dummydatas";

export default function AboutUsPage() {
  return (
    <ResponsiveContainer component="main" sx={{ marginTop: "130px" }}>
      <TeamContainer
        teamTitle="توسعه دهندگان"
        data={staffData.devs}
        bit={true}
      />
      <TeamContainer teamTitle="طراحان بانک سوال" data={staffData.question} />
    </ResponsiveContainer>
  );
}
