import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
// import img1 from "/google/pic-1.png";
// import img2 from "/google/pic-2.png";
// import img3 from "/google/pic-1.png";
// import img4 from "/google/pic-1.png";
import { Element } from "react-scroll";

const GoogleReview = () => {
  const reviews = [
    {  text: "⭐⭐⭐⭐⭐ The 100 LPH RO system we purchased is working flawlessly. The water quality is excellent, and the installation was done professionally. Highly recommended!", name: "Atul Uniyal" },
    {  text: "⭐⭐⭐⭐⭐ Shreeansh Aqua Solutions provided us with the best RO system for our office. Great service and quick response!", name: "Priya Verma, Haridwar" },
    {  text: "⭐⭐⭐⭐⭐ I installed the 50 LPH RO system at my restaurant, and the water is crystal clear. Best investment ever!", name: "Soni Negi" },
    {  text: "⭐⭐⭐⭐⭐ Their domestic RO purifier is compact, efficient, and affordable. My family is happy with the taste of the water", name: "Raj Mehra" },
    {  text: " ⭐⭐⭐⭐⭐ The RO system with a hot and cold dispenser is a game-changer. Perfect for my office needs!", name: "Raj Mehra" },
    {  text: "Highly recommend this place!", name: "Rohit Mehta, Rishikesh" },
    {  text: "Highly recommend this place!", name: "Raj Mehra" },
  ];

  return (
    <Element name="reviews" className="bg-gradient-to-r from-[#DCEFFD] via-[#FFFFFF] to-[#FDE1E1] py-10 ">
      <div className="text-center text-3xl font-bold text-[#1B1F3B] mb-6">
        Reviews By Our Satisfied Clients
      </div>
      {/* Carousel */}
      <div className="relative max-w-5xl mx-auto px-3">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >      
              <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem  key={index}
                className="flex-shrink-0 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2">
                  <Card className="rounded-lg shadow-md">
                    {/* <img
                      src={review.img}
                      alt={review.name}
                      className="w-full object-cover rounded-t-lg"
                    /> */}
                    <CardContent className="p-4">
                      <h3 className="text-xl font-semibold text-[#1B1F3B]">
                        {review.name}
                      </h3>
                      <p className="text-gray-600 mt-2">{review.text}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Navigation */}
          <CarouselPrevious className="absolute left-0 md:left-[-30px] top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full p-2 z-10">
            &lt;
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 md:right-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full p-2 z-10">
            &gt;
          </CarouselNext>
        </Carousel>
      </div>
      </Element>
  );
};

export default GoogleReview;
