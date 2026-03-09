import AboutHero from "@/components/AboutHero/AboutHero";
import AboutStory from "@/components/AboutUs/AboutStory";
import BeliefsSection from "@/components/AboutUs/BeliefsSection";
import CoreValuesSection from "@/components/AboutUs/CoreValuesSection";
import MissionSection from "@/components/AboutUs/MissionSection";
import Categories from "@/components/Categories/Categories";


export default function AboutUsPage() {
  return (
    <>
    <AboutHero />
    <AboutStory />
    <MissionSection />
    <CoreValuesSection />
    <BeliefsSection />
    <Categories />
  </>
  )

}