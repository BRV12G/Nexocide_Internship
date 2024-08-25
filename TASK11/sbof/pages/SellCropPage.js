import SellCropHeader from '../components/sellcrops/SellCropHeader';
import SellCropForm from '../components/sellcrops/SellCropForm';
import SellCropButton from '../components/sellcrops/SellCropButton';
import Footer from '../components/Footer';

const SellCropPage = () => {
  return (
    <div className=" bg-gray-100">
      <div className="w-full  mb-20">
        <SellCropHeader />
        <SellCropForm />
        <SellCropButton />
        <Footer />
      </div>
    </div>
  );
};

export default SellCropPage;
