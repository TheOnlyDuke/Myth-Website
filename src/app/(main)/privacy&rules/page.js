import ListedMenu from "@/components/mainPage/Introduction/ListedMenu";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import { privacy } from "@/utils/dummydatas";

export default function PricayRulesPage() {
  return (
    <ResponsiveContainer component="main" sx={{ my: "130px" }}>
      <ListedMenu data={privacy} bit={true} />
    </ResponsiveContainer>
  );
}
