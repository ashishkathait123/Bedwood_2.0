import WaterHeader from "./WaterHeader.jsx";
import productData from "../../data/water/first.json";
import productDataTwo from "../../data/water/second.json";
import productDataThree from "../../data/water/third.json";
import productDataFour from "../../data/water/forth.json";
import Specification from "./Specification.jsx";
import SpecificationTwo from "./SpecificationTwo";
import SpecificationThree from "./SpecificationThree";
import SpecificationFour from "./SpecificationFour";
import SpecificationFive from "./SpecificationFive";
import WaterHeaderNext from "./WaterHeaderNext.jsx";

const WaterPurifier = () => {
  const headerData = {
    title: "Water Purifier",
    img: "/water-purifier/img11.png",
    firstDetails: "Suitable for Home, Office & ",
    secondDetails: "Any place with Customizable Purifier.",
    bold: "Removes contaminants such as heavy metals, chlorine, and other impurities",
  };
  const headerData2 = {
    title: "Water Purifier",
    img: "water-purifier.jpg",
    firstDetails: "A water softener removes minerals, like calcium and magnesium, to prevent scale buildup,",
    secondDetails: "improve appliance efficiency, and enhance soap lathering",
    bold: "Save money on cleaning products",
  };

  return (
    <>
      {/* <WaterHeader {...headerData} /> */}
      <WaterHeaderNext {...headerData2} />
      <Specification productData={productData} />
      <SpecificationTwo productDataTwo={productDataTwo} />
      <SpecificationThree productDataThree={productDataThree} />
      <SpecificationFour productDataFour={productDataFour} />
      <SpecificationFive />
    </>
  );
};

export default WaterPurifier;
