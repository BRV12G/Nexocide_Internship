
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function DroneBanner() {
//   const [currentSlide, setCurrentSlide] = React.useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
//     customPaging: (i) => (
//       <div className={`w-2.5 h-2.5 ${currentSlide === i ? 'bg-white opacity-75' : 'bg-gray-400 opacity-50'} rounded-full`}></div>
//     ),
//   };

//   const slides = [
//     {
//       src: "/DroneSection/drone.png",
//       alt: "Crop Spraying",
//       title: "CROP SPRAYING",
//       description: "Spraying smarter with Drone Technology",
//       price: "STARTS AT 2599/HR",
//       buttonText: "LEARN MORE",
//     },
//     {
//       src: "/DroneSection/farmer.jpg",
//       alt: "Another Service",
//       title: "FERTILIZER ",
//       description: "Fertilizer  services",
//       price: "STARTS AT 2999/HR",
//       buttonText: "LEARN MORE",
//     },
//     {
//         src: "/DroneSection/fertilizer.jpg",
//         alt: "Another Service",
//         title: "NUTRITION RESEARCH ",
//         description: "Nutriton knowledge according to the soil type",
//         price: "STARTS AT 3999/HR",
//         buttonText: "LEARN MORE",
//       },
//     // Add more slides as needed
//   ];

//   return (
//     <div className="relative">
//       <Slider {...settings} className="overflow-hidden">
//         {slides.map((slide, index) => (
//           <div key={index} className="relative">
//             <img src={slide.src} alt={slide.alt} className="w-full h-80 object-cover" />
//             <div className="absolute inset-0 flex flex-col items-center justify-end text-white p-4">
//               <h2 className="text-3xl font-bold">{slide.title}</h2>
//               <p className="text-sm">{slide.description}</p>
//               <div className="flex space-x-2 mt-2">
//                 <p className="text-lg">{slide.price}</p>
//                 <button className="bg-red-600 text-sm rounded-full px-3 py-1 mb-4">
//                   {slide.buttonText}
//                 </button>
//               </div>
//               {/* Render dots directly */}
//               <div className="absolute bottom-4 w-full flex justify-center">
//                 <ul className="mt-4 flex space-x-2">
//                   {slides.map((_, i) => (
//                     <li key={i} className={`w-2.5 h-2.5 ${currentSlide === i ? 'bg-red-500 ' : 'bg-white'} rounded-full`} />
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DroneBanner() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    customPaging: (i) => (
      <div
        className={`w-2.5 h-2.5 ${
          currentSlide === i ? "bg-white opacity-75" : "bg-gray-400 opacity-50"
        } rounded-full`}
      ></div>
    ),
  };

  const slides = [
    {
      src: "/DroneSection/drone.png",
      alt: "Crop Spraying",
      title: "CROP SPRAYING",
      description: "Spraying smarter with Drone Technology",
      price: "STARTS AT 2599/HR",
      buttonText: "LEARN MORE",
    },
    {
      src: "/DroneSection/farmer.jpg",
      alt: "Another Service",
      title: "FERTILIZER ",
      description: "Fertilizer  services",
      price: "STARTS AT 2999/HR",
      buttonText: "LEARN MORE",
    },
    {
      src: "/DroneSection/fertilizer.jpg",
      alt: "Another Service",
      title: "NUTRITION RESEARCH ",
      description: "Nutriton knowledge according to the soil type",
      price: "STARTS AT 3999/HR",
      buttonText: "LEARN MORE",
    },
    // Add more slides as needed
  ];

  return (
    <div className="relative">
      <Slider {...settings} className="overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className="relative ">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] object-cover"
            />
            <div className=" sm:mb-6 lg:mb-12 xl:mb-12 absolute inset-0 flex flex-col items-center justify-end text-white p-4">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
                {slide.title}
              </h2>
              <p className="text-xs md:text-sm lg:text-base">
                {slide.description}
              </p>
              <div className="flex space-x-2 mt-2">
                <p className="text-sm md:text-lg lg:text-xl">{slide.price}</p>
                <button className="bg-red-600 text-xs md:text-sm rounded-full px-3 py-1 mb-4">
                  {slide.buttonText}
                </button>
              </div>
              {/* Render dots directly */}
              <div className="absolute bottom-4 w-full flex justify-center">
                <ul className="mt-4 flex space-x-2">
                  {slides.map((_, i) => (
                    <li
                      key={i}
                      className={`w-2.5 h-2.5 ${
                        currentSlide === i ? "bg-red-500 " : "bg-white"
                      } rounded-full`}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}




  
  
  