
import Hero from "./components/Hero/Hero";
import { StaySafe } from "./components/StaySafe/StaySafe";
import { Support } from "./components/Support/Support";
import { JoinUs } from "./components/JoinUs/JoinUs";
import { Research } from "./components/Research/Research";
import { HowWork } from "./components/HowWork/HowWork";

export default function Home() {
  return (
   <>
    <Hero/>
    <StaySafe/>
    <Support/>
    <JoinUs/>
    <Research/>
    <HowWork/>
   </>
  );
}
