// pages/index.js
import CropSelection from '../components/CropSelection';
import AddedCrops from '../components/AddedCrops';
import CropCategories from '../components/CropCategories';

export default function Home() {
  return (
    <div className="container  mx-auto">
      <CropSelection />
      <AddedCrops />
      <CropCategories />
      <button className='bg-green-600 w-full px-2 py-2 rounded-lg m-1'>Done</button>
    </div>
  );
}
