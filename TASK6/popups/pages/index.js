// pages/index.js
import ClickPopup from '../components/ClickPopup';
import HoverPopup from '../components/HoverPopup';

const Home = () => {
  return (
    <div className='transition hover:bg-stone-300 bg-stone-400'>
      <h1 className=" mt-8 text-4xl mb-8 font-bold text-center">Next.js Pop-ups with Tailwind CSS</h1>
    <div className=" float-root min-h-screen py-2">
      
      <div className="m-20 float-left">
        <h1 className='m-4 font-bold text-xl bg-blue-300 rounded-lg shadow-lg p-4'>Non-dissappearing click-on pop-up</h1>
        <ClickPopup />
      </div>
      <div class="m-60 float-right">
      <h1 className='m-4 font-bold text-xl bg-green-300 rounded-lg shadow-lg p-4'>Appearing on-hover only</h1>
        <HoverPopup />
      </div>
    </div>
    </div>
  );
};

export default Home;