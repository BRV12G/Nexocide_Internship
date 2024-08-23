 // components/CropCategories.js
// import { useState } from 'react';

// const categories = {
//   Fruits: ["Apple", "Banana", "Mango"],
//   Vegetables: ["Spinach", "Cucumber", "Cabbage", "Carrot", "Okra", "Beetroot"],
//   Flowers: ["Rose", "Tulip"],
//   Cereals: ["Wheat", "Rice"],
//   Pulses: ["Lentils", "Chickpeas"]
// };

// export default function CropCategories() {
//   const [selectedCategory, setSelectedCategory] = useState("Vegetables");

//   return (
//     <div className="flex bg-gray-700">
//       <div className="w-1/4 bg-gray-300 p-4">
//         {Object.keys(categories).map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`block w-full text-left p-2 my-2 rounded-md ${
//               selectedCategory === category ? 'bg-green-500 text-white' : 'bg-white'
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className="w-3/4 bg-white p-4 grid grid-cols-3 gap-4">
//         {categories[selectedCategory].map((crop) => (
//           <div
//             key={crop}
//             className="p-4 bg-gray-100 border rounded-md flex flex-col items-center"
//           >
//             <img src={`/${crop.toLowerCase()}.png`} alt={crop} className="w-12 h-12" />
//             <span className="mt-2">{crop}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useState } from 'react';

// const categories = {
//   Fruits: ["Apple", "Banana", "Mango"],
//   Vegetables: ["Spinach", "Cucumber", "Cabbage", "Carrot", "Okra", "Beetroot"],
//   Flowers: ["Rose", "Tulip"],
//   Cereals: ["Wheat", "Rice"],
//   Pulses: ["Lentils", "Chickpeas"]
// };

// function Card({ imageSrc, altText, title, onClick, isSelected }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`flex flex-col items-center p-2 sm:p-4 min-w-[120px] sm:min-w-[150px] max-w-[120px] sm:max-w-[150px] cursor-pointer ${
//         isSelected ? 'bg-green-500 text-white' : ''
//       }`}
//     >
//       <div className={`w-24 h-24 sm:w-32 sm:h-32 border border-2 ${isSelected ? 'border-white' : 'border-green-700'} rounded-lg shadow-2xl flex items-center justify-center`}>
//         <img src={imageSrc} alt={altText} className="max-w-full max-h-full" />
//       </div>
//       <p className="text-xs sm:text-sm text-center mt-2">{title}</p>
//     </div>
//   );
// }

// export default function CropCategories() {
//   const [selectedCategory, setSelectedCategory] = useState("Vegetables");

//   return (
//     <div className="flex bg-gray-700">
//       <div className="w-1/4 bg-gray-300 p-4 flex flex-col items-center">
//         {Object.keys(categories).map((category) => (
//           <Card
//             key={category}
//             imageSrc={`/${category.toLowerCase()}.png`}
//             altText={category}
//             title={category}
//             onClick={() => setSelectedCategory(category)}
//             isSelected={selectedCategory === category}
//           />
//         ))}
//       </div>
//       <div className="w-3/4 bg-white p-4 grid grid-cols-3 gap-4">
//         {categories[selectedCategory].map((crop) => (
//           <Card
//             key={crop}
//             imageSrc={`/${crop.toLowerCase()}.png`}
//             altText={crop}
//             title={crop}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }




// import { useState } from 'react';

// const categories = {
//   Fruits: ["Apple", "Banana", "Mango"],
//   Vegetables: ["Spinach", "Cucumber", "Cabbage", "Carrot", "Okra", "Beetroot"],
//   Flowers: ["Rose", "Tulip"],
//   Cereals: ["Wheat", "Rice"],
//   Pulses: ["Lentils", "Chickpeas"]
// };

// function Card({ imageSrc, altText, title, onClick, isSelected }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`flex flex-col items-center p-2 sm:p-4 min-w-[90px] sm:min-w-[120px] md:min-w-[150px] max-w-[90px] sm:max-w-[120px] md:max-w-[150px] cursor-pointer ${
//         isSelected ? 'bg-green-500 text-white' : ''
//       }`}
//     >
//       <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-2 ${isSelected ? 'border-white' : 'border-green-700'} rounded-lg shadow-2xl flex items-center justify-center`}>
//         <img src={imageSrc} alt={altText} className="max-w-full max-h-full" />
//       </div>
//       <p className="text-xs sm:text-sm md:text-base text-center mt-2">{title}</p>
//     </div>
//   );
// }

// export default function CropCategories() {
//   const [selectedCategory, setSelectedCategory] = useState("Vegetables");

//   return (
//     <div className="flex flex-col md:flex-row bg-gray-700">
//       <div className="w-full md:w-1/4 bg-gray-300 p-4 flex flex-wrap justify-center items-center">
//         {Object.keys(categories).map((category) => (
//           <Card
//             key={category}
//             imageSrc={`/${category.toLowerCase()}.png`}
//             altText={category}
//             title={category}
//             onClick={() => setSelectedCategory(category)}
//             isSelected={selectedCategory === category}
//           />
//         ))}
//       </div>
//       <div className="w-full md:w-3/4 bg-white p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {categories[selectedCategory].map((crop) => (
//           <Card
//             key={crop}
//             imageSrc={`/${crop.toLowerCase()}.png`}
//             altText={crop}
//             title={crop}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }







import { useState } from 'react';
import Card from '../components/category_cards'; // Adjust the path if needed
import Card2 from '../components/CategoryCardsoptions'; 

const categories = {
  Fruits: ["Apple", "Banana", "Mango","Papaya","Grapes"],
  Vegetables: ["Spinach", "Cucumber", "Cabbage", "Carrot", "Okra", "Beetroot"],
  Flowers: ["Rose", "Tulip","Sunflower","Lily","Marigold"],
  Cereals: ["Wheat", "Rice","Bajra","Jowar","Maize"],
  Pulses: ["Lentils", "Chickpeas","BlackGram"]
};

export default function CropCategories() {
  const [selectedCategory, setSelectedCategory] = useState("Vegetables");

  return (
    <div className="flex bg-neutral-200">
       
      <div className=" bg-gray-300 mt-2 flex flex-col items-center rounded ">
        {Object.keys(categories).map((category) => (
          <div key={category} onClick={() => setSelectedCategory(category)} className={`cursor-pointer ${
            selectedCategory === category ? "bg-neutral-200 rounded-lg" : ""
          }`}>
            <Card
              imageSrc={`/categories/${category.toLowerCase()}.png`} // Path to category icons
              altText={category}
              title={category}
            />
          </div>
        ))}
      </div>
      {/* <h2 className="text-xl font-bold text-center mb-4">{selectedCategory}</h2> */}
      <div className=" mt-4 ">
      <h2 className="text-xl font-bold  ml-4 mb-4">{selectedCategory}</h2>
      <div className='grid grid-cols-3'>
        {categories[selectedCategory].map((crop) => (
          <Card2
            key={crop}
            imageSrc={`/Options/${crop.toLowerCase()}.png`} // Path to crop icons
            altText={crop}
            title={crop}
          />
        ))}</div>
      </div>
     
    </div>
  );
}

