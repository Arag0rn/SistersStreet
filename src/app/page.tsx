
import Hero from "./components/Hero/Hero";
import { StaySafe } from "./components/StaySafe/StaySafe";
import { Support } from "./components/Support/Support";
import { JoinUs } from "./components/JoinUs/JoinUs";
import { Research } from "./components/Research/Research";
import { HowWork } from "./components/HowWork/HowWork";
import { Aboutus } from "./components/Aboutus";
import { OurTeam } from "./components/OurTeam/OurTeam";

export default function Home() {
  return (
   <>
    <Hero/>
    <StaySafe/>
    <Support/>
    <JoinUs/>
    <Research/>
    <HowWork/>
    <Aboutus/>
    <OurTeam/>
   </>
  );
}
