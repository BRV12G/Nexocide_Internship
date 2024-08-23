// export default function ServicesCard({ imageSrc, altText, title }) {
//     return (
//       <div className="flex flex-col items-center p-4 min-w-[150px] max-w-[150px]">
//         <div className="w-32 h-32 bg-green-700 rounded-lg shadow-lg flex items-center justify-center">
//           <img src={imageSrc} alt={altText} className="max-w-full max-h-full" />
//         </div>
//         <p className="text-sm text-center mt-2">{title}</p>
//       </div>
//     );
//   }

export default function ServicesCard({ imageSrc, altText, title }) {
    return (
      <div className="flex flex-col items-center p-2 sm:p-4 min-w-[120px] sm:min-w-[150px] max-w-[120px] sm:max-w-[150px]">
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-green-700 rounded-lg shadow-lg flex items-center justify-center">
          <img src={imageSrc} alt={altText} className="max-w-full max-h-full" />
        </div>
        <p className="text-xs sm:text-sm text-center mt-2">{title}</p>
      </div>
    );
  }
  