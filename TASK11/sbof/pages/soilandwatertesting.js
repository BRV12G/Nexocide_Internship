import SoilWaterTestingHeader from '../components/testing/SoilWaterTestingHeader';
import SoilWaterTestingForm from '../components/testing/SoilWaterTestingForm';
import SubmitPayButton from '../components/testing/SubmitPayButton';
import Footer from '../components/Footer';

const SoilWaterTestingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <SoilWaterTestingHeader />
        <SoilWaterTestingForm />
        <SubmitPayButton />
        <Footer />
      </div>
    </div>
  );
};

export default SoilWaterTestingPage;
