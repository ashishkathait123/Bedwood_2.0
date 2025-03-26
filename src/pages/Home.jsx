import React from "react";
import { useState, useEffect } from "react";

import DiscountStrip from "./DiscountStrip";
import Navbar from "./Navbar";
import Banner from "./discountbanner/Banner";
import Footer from "./Footer";
import Hero from "./Hero"; // Import the new Hero component
import Banner2 from "./discountbanner/Banner2";
import Card from "@/components/brandcards/cards";
import BestSellerSection from "@/components/products/bestsellercards/BestSellerSection";
import TopPicksSection from "./top-picks/Top-picks";
import ReviewSection from "@/components/reviews/ReviewSection";
import EssentialsSection from "@/components/products/essential/cards";
import CollectionsSection from "@/components/products/collerctions/CollectionsSection";
import BedwoodFaq from "@/components/faq/bedwoodfaq";
import PopUpForm from "@/components/form/popform";
import BuyOnPhoneButton from "./BuyOnPhoneButton";
import WhatsApp from "./Whatsapp";
const Home = () => {

  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Show popup when the website loads
    setShowPopup(true);
  }, []);
  return (
    <>
      <DiscountStrip />
      {/* <Header1 /> */}
      <Navbar />
<Hero />
 <Banner2 />
      {/*Hero Section of the (Replaces old slider and side banners) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
       
        {showPopup && <PopUpForm onClose={() => setShowPopup(false)} />}

        <TopPicksSection />
        <CollectionsSection />
        <EssentialsSection />

        {/* <ProductList /> */}

        <BestSellerSection />
<BuyOnPhoneButton />
        <Banner />
        <WhatsApp />
        <Card />
        <ReviewSection />

        {/* <FAQ/> */}
      </div>
      <BedwoodFaq/>
      <Footer />
    </>
  );
};

export default Home;
