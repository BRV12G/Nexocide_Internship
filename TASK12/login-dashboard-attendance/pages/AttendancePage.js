import Header2 from '../components/CommonHeader';
import AttendanceBody from '../components/AttendanceBody';
import Footer from '../components/Footer';

const AttendancePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header2 />
      <div className="flex-grow overflow-y-auto">
        <AttendanceBody />
      </div>
      <Footer />
    </div>
  );
}

export default AttendancePage;

