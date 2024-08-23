// export default function ServicesSection() {
//     return (
//       <div className="mt-4 mb-20">
//         <h2 className="text-lg font-semibold">Services</h2>
//         <div className="grid grid-cols-3 gap-2 mt-2">
//           <div className="flex flex-col items-center p-4 bg-green-300 rounded-lg">
//             <img src="/rent-icon.png" alt="Rent a Tool" className="h-8 mb-2" />
//             <p className="text-xs text-center">Rent a Tool</p>
//           </div>
//           <div className="flex flex-col items-center p-4 bg-green-300 rounded-lg">
//             <img src="/sell-crop-icon.png" alt="Sell Your Crop" className="h-8 mb-2" />
//             <p className="text-xs text-center">Sell Your Crop</p>
//           </div>
//           <div className="flex flex-col items-center p-4 bg-green-300 rounded-lg">
//             <img src="/soil-testing-icon.png" alt="Soil Testing" className="h-8 mb-2" />
//             <p className="text-xs text-center">Soil Testing</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
  

import Card from '../components/ServicesCard';



export default function ServicesSection() {
    return (
      <div className="mt-4 mb-12">
        <h2 className="text-xl font-bold ml-4">Services</h2>
        <div className="flex overflow-x-auto space-x-4 p-2 ">
          <Card imageSrc="/services/drone.png" altText="drone" title="Rent a Drone" />
          <Card imageSrc="/tools/tree.png" altText="sell" title="Sell your crops" />
          <Card imageSrc="/services/user.png" altText="crop check" title="personal crop check" />
          <Card imageSrc="/services/testtube.png" altText="test" title="soil testing" />
          <Card imageSrc="/services/drone.png" altText="drone" title="Rent a Drone" />
          <Card imageSrc="/tools/tree.png" altText="sell" title="Sell your crops" />
          <Card imageSrc="/services/user.png" altText="crop check" title="personal crop check" />
          <Card imageSrc="/services/testtube.png" altText="test" title="soil testing" />
          

        </div>
      </div>
    );
  }