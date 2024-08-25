import ChangeLanguageHeader from '../components/language/ChangeLanguageHeader';
import LanguageGrid from '../components/language/LanguageGrid';
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