// components/AddedCrops.js

// export default function AddedCrops() {
//     const crops = ["Tomato", "Onion", "Brinjal", "Broccoli", ];
  
//     return (
//       <div className="p-4 bg-yellow-100  shadow-sm my-4">
//         <h3 className="text-lg font-semibold mb-2">Added crops</h3>
//         <div className="flex gap-2">
//           {crops.map((crop) => (
//             <div key={crop} className="p-2 bg-white border rounded-md flex items-center gap-2">
//               <img src={`/${crop.toLowerCase()}.png`} alt={crop} className="w-8 h-8" />
//               <span>{crop}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  

import Card from '../components/cards_added';



export default function ToolsSection() {
    return (
      <div className="mt-4 bg-lime-100 ">
       <div className='mt-2'><h2 className="text-xl font-bold ml-4 ">Added Crops</h2></div>
        <div className="flex overflow-x-auto space-x-4 p-2 ">
          <Card imageSrc="/addedcrops/Tomato.png" altText="tomato" title="Tomato" />
          <Card imageSrc="/addedcrops/Onion.png" altText="onion" title="Onion" />
          <Card imageSrc="/addedcrops/brinjal.png" altText="brinjal" title="Brinjal" />
          <Card imageSrc="/addedcrops/broccoli.png" altText="Brocolli" title="Brocolli" />
          <Card imageSrc="/addedcrops/Tomato.png" altText="tomato" title="Tomato" />
          <Card imageSrc="/addedcrops/Onion.png" altText="onion" title="Onion" />
          <Card imageSrc="/addedcrops/brinjal.png" altText="brinjal" title="Brinjal" />
          <Card imageSrc="/addedcrops/broccoli.png" altText="Brocolli" title="Brocolli" />

        </div>
      </div>
    );
  }