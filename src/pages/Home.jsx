import AboutClient from "@/components/demo/AboutClient";
import GoogleReview from "@/components/demo/GoogleReview";
import HomeBanner from "@/components/demo/HomeBanner";
import HomeClient2 from "@/components/demo/HomeClient2";
import HomeClint from "@/components/demo/HomeClint";
import AboutUs from "@/components/demo/AboutUs";
import HomeProducts from "@/components/demo/HomeProducts";
// import { SectionHero } from "@/components/demo/SectionHero.jsx";
import TopSection from "@/components/demo/TopSection.jsx";
import TrustedWaterSection from "@/components/demo/TrustedWaterSection";
import WhyUs from "@/components/demo/WhyUs";
import ReactSlikSlider from "../components/demo/ReactSlikSlider";
import LeftRightBox from "@/components/demo/LeftRightBox";
import HomeNewBanner from "@/components/demo/HomeNewBanner";

const Home = () => {
  return (
    <>
      <TopSection />
      {/* <SectionHero /> */}
      {/* <ReactSlikSlider /> */}
      {/* <HomeBanner /> */}
      <HomeNewBanner />
      {/* <LeftRightBox /> */}

      <TrustedWaterSection />
      <HomeProducts />
      <WhyUs />
      <HomeClint />
      <HomeClient2 />
      <AboutClient />
      <AboutUs></AboutUs>
      <GoogleReview />
    </>
  );
};
export default Home;