import '@/styles/globals.css'
import { useState } from 'react';
import NewBankForm from '@/components/NewBankForm';

export default function App({ Component, pageProps }) {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(true);
  const handleHideForm = () => setShowForm(false);

  return (
    <div>
      <Component {...pageProps} showForm={showForm} onShowForm={handleShowForm} onHideForm={handleHideForm} />
      {showForm && <NewBankForm onHideForm={handleHideForm} />}
    </div>
  );
}
