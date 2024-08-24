// pages/index.js
import ChangeLanguageHeader from '../components/ChangeLanguageHeader';
import LanguageGrid from '../components/LanguageGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className=" flex flex-col mb-20">
      <ChangeLanguageHeader />
      <LanguageGrid />
      <Footer />
    </div>
  );
}
