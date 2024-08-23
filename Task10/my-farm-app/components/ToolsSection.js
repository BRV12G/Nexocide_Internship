// export default function ToolsSection() {
//     return (
//       <div className="mt-4">
//         <h2 className="text-xl font-bold">Tools</h2>
//         <div className="grid grid-cols-4  gap-1">
//           <div className="flex flex-col items-center p-4">
//             <div className="border border-green-700 rounded-lg shadow-2xl p-6"><img src="/weather-icon.png" alt="Weather Forecast" className="" /></div>
//             <p className="text-xs text-center">Weather Forecast</p>
//           </div>
//           <div className="flex flex-col items-center p-4 ">
//             <div className="border border-green-700 rounded-lg p-6 shadow-2xl"><img src="/weather-icon.png" alt="Agri news" className="" /></div>
//             <p className="text-xs text-center">Agri News</p>
//           </div>
//           <div className="flex flex-col items-center p-4 ">
//             <div className="border border-green-700 rounded-lg p-6 shadow-2xl"><img src="/weather-icon.png" alt="Market Price" className="" /></div>
//             <p className="text-xs text-center">Market Price</p>
//           </div>
//           <div className="flex flex-col items-center p-4 ">
//             <div className="border border-green-700 rounded-lg p-6 shadow-2xl"><img src="/weather-icon.png" alt="Crop Care" className="" /></div>
//             <p className="text-xs text-center">Crop Care</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
import Card from '../components/Card';



export default function ToolsSection() {
    return (
      <div className="mt-4 ">
        <h2 className="text-xl font-bold ml-4">Tools</h2>
        <div className="flex overflow-x-auto space-x-4 p-2 ">
          <Card imageSrc="/tools/weather.webp" altText="Weather Forecast" title="Weather Forecast" />
          <Card imageSrc="/tools/news.png" altText="Agri News" title="Agri News" />
          <Card imageSrc="/tools/marketprice.png" altText="Market Price" title="Market Price" />
          <Card imageSrc="/tools/tree.png" altText="Crop Care" title="Crop Care" />
          <Card imageSrc="/tools/weather.webp" altText="Weather Forecast" title="Weather Forecast" />
          <Card imageSrc="/tools/news.png" altText="Agri News" title="Agri News" />
          <Card imageSrc="/tools/marketprice.png" altText="Market Price" title="Market Price" />
          <Card imageSrc="/tools/tree.png" altText="Crop Care" title="Crop Care" />

        </div>
      </div>
    );
  }