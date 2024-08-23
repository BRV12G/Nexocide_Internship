// export default function category_cards({ imageSrc, altText, title }) {
//     return (
//       <div className="flex flex-col items-center p-2 sm:p-4 min-w-[120px] sm:min-w-[150px] max-w-[120px] sm:max-w-[150px]">
//         <div className="w-24 h-24 sm:w-32 sm:h-32 border border-2 border-green-700 rounded-lg shadow-2xl flex items-center justify-center">
//           <img src={imageSrc} alt={altText} className="max-w-full max-h-full" />
//         </div>
//         <p className="text-xs sm:text-sm text-center mt-2">{title}</p>
//       </div>
//     );
//   }

// export default function CategoryCards({ imageSrc, altText, title }) {
//     return (
//       <div className="flex flex-col items-center  sm:p-4 min-w-[100px] sm:min-w-[150px] max-w-[100px] sm:max-w-[150px]">
//         <div className="w-20 h-20 sm:w-32 sm:h-32 border border-2 border-green-700 rounded-lg shadow-2xl flex items-center justify-center">
//           <img src={imageSrc} alt={altText} className="max-w-full max-h-full" />
//         </div>
//         <p className="text-xs sm:text-sm text-center mt-2">{title}</p>
//       </div>
//     );
//   }
  

// export default function CategoryCards({ imageSrc, altText, title }) {
//     return (
//       <div className="flex flex-col items-center p-2 sm:p-4 min-w-[80px] sm:min-w-[150px] max-w-[80px] sm:max-w-[150px]">
//         <div className="w-16 h-16 sm:w-32 sm:h-32 border border-2 border-green-700 rounded-lg shadow-2xl flex items-center justify-center">
//           <img src={imageSrc} alt={altText} className="max-w-full max-h-full" />
//           <p className="text-[10px] sm:text-sm text-center mt-2">{title}</p>
//         </div>
//       </div>
//     );
//   }
  

export default function CategoryCards({ imageSrc, altText, title }) {
    return (
      <div className="flex flex-col items-center p-2 sm:p-4 min-w-[80px] sm:min-w-[150px] max-w-[80px] sm:max-w-[150px]">
        <div className="w-16 h-16 sm:w-32 sm:h-32 border border-2 border-green-700 rounded-lg shadow-2xl flex flex-col items-center justify-center p-2">
          <img src={imageSrc} alt={altText} className="max-w-full max-h-full" />
          <p className="text-[10px] sm:text-sm text-center ">{title}</p>
        </div>
      </div>
    );
  }
  
  
  
 
  