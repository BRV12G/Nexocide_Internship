// pages/dashboard.js
import Header from '../components/Dashboard/Header'; // Default import
import Body from '../components/Dashboard/Body';     // Default import
import Footer2 from '../components/Footer';

const DashboardPage=() => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 ">
      <Header />
      <Body />
      <Footer2 />
    </div>
  );
}

export default DashboardPage;
