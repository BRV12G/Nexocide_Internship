import Header from '../components/CommonHeader';
import AttendanceDetailBody from '../components/DetailBody';
import Footer from '../components/Footer';

const AttendanceDetailPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <AttendanceDetailBody />
      </div>
      <Footer />
    </div>
  );
};

export default AttendanceDetailPage;
