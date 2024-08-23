import TopBar from '../components/TopBar';
import DroneBanner from '../components/DroneBanner';
import CropSection from '../components/CropSection';
import ToolsSection from '../components/ToolsSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container mx-auto overflow-y m-4">
      <TopBar className="ml-2 mr-2" />
      <DroneBanner className="ml-2 mr-2" />
      <CropSection className="ml-2 mr-2"/>
      <ToolsSection className="ml-2 mr-2" />
      <ServicesSection className="ml-2 mr-2"/>
      <Footer className="ml-2 mr-2"/>
    </div>
  );
}
