import React from 'react';

const BedwoodFaq = () => {
    const data = {
        title: "Buy Furniture Online at BedWood Furnishing - India's One-Stop Solution for All Your Needs",
        intro: "A home is the most relaxing place in our life, and the furniture brings comfort to our home. Whether you want to furnish your new home or give your existing decor a new makeover, BedWood Furnishing offers a wide range of stylish and functional furniture that caters to every taste and preference.",
        description: [
            "Whether you want to furnish your new home or give your existing decor a new makeover, get every type of wooden furniture online in India that perfectly blends with your home decor with BedWood Furnishing. From traditional designs to contemporary styles, we have something for everyone.",
            "At BedWood Furnishing, we provide a vast collection of ready-made and customized solid wood furniture online. Our customizable options allow you to design furniture that fits your space and style perfectly, ensuring you get exactly what you envision for your home.",
            "You can also explore our exclusive home decor range, including wall art, photo frames, indoor plants, tableware, glassware, kitchen organizers, and many more. Each piece is thoughtfully curated to complement our furniture and enhance the overall aesthetic of your home.",
            "Whether classy or minimalist, we offer you a massive variety of online furniture. Our extensive catalog features everything from sofas and dining tables to beds and wardrobes, all crafted to meet your needs and preferences.",
            "Our various designs, dimensions, colors, and finish options make us one of India's best online furniture sites. Whether you have a small apartment or a large house, we have furniture solutions that can adapt to your space.",
            "Our craftsmen know your home furniture preference; thus, our website curates furniture of different sizes, whether space-saving or huge. Take a pick from our exquisite collection of home furniture online or get it customized as per your requirements; everything is possible at BedWood Furnishing."
        ],
        materialsTitle: "Check out Various Furniture Materials Available at BedWood Furnishing",
        materials: [
            { name: "Sheesham Wood", description: "Sheesham is a type of Indian rosewood that is a trendy pick for home furniture. It's known for its durability, natural beauty, and resistance to decay, making it ideal for long-lasting furniture." },
            { name: "Mango Wood", description: "Mango wood is another popular choice for furniture in India. It's eco-friendly, sustainable, and features beautiful grain patterns, offering a unique aesthetic to every piece." },
            { name: "Teak Wood", description: "Teak is the most popular type of wood for furniture in India. Renowned for its strength and weather resistance, teak wood is perfect for both indoor and outdoor furniture, ensuring longevity and elegance." },
            { name: "Engineered Wood", description: "If you enjoy the sleekness that comes with simplicity, engineered wood will be the right choice. It's manufactured to be durable, versatile, and often more cost-effective than solid wood." },
        ],
        furnitureTitle: "Select from the Wide Range of Furniture Online at BedWood Furnishing",
        furniture: [
            { name: "Living Room", description: "The Living Room is the heart of our home, where families gather to relax and socialize. Our collection includes sofas, coffee tables, and entertainment units designed for comfort and style." },
            { name: "Bedroom", description: "Everyone needs a comfortable bedroom to unwind after a long day. Our bedroom furniture features elegant beds, wardrobes, and bedside tables that enhance your relaxation space." },
            { name: "Dining Room", description: "A happy meal time can be relished in the dining area of the house. Our dining tables and chairs are designed for both functionality and aesthetic appeal, perfect for family dinners or entertaining guests." },
        ]
    };

    return (
        <div className="max-w-full mx-auto p-4 md:p-8 font-pangram bg-white">
            <h1 className="text-xl font-semibold mb-4">{data.title}</h1>
            <p className="text-base font-medium mb-6">{data.intro}</p>
            {data.description.map((para, index) => (
                <p className="text-base mb-3" key={index}>{para}</p>
            ))}
            
            <h2 className="text-xl font-semibold mt-8 mb-4">{data.materialsTitle}</h2>
            {data.materials.map((material, index) => (
                <div key={index} className="px-6">
                    <h3 className="text-base font-semibold mt-4">{index + 1}. {material.name}</h3>
                    <p className="text-base mb-4">{material.description}</p>
                </div>
            ))}

            <h2 className="text-xl font-semibold mt-8 mb-4">{data.furnitureTitle}</h2>
            {data.furniture.map((item, index) => (
                <div key={index} className="px-6">
                    <h3 className="text-base font-semibold mt-4">{index + 1}. {item.name}</h3>
                    <p className="text-base mb-4">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default BedwoodFaq;
