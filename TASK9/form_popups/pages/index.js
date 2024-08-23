import { useState } from 'react';
import Modal from '../components/Modal';
import Confirm from '../components/Confirm';

export default function Home() {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const [isConfirmVisible, setConfirmVisible] = useState(false);

  const openConfirm = () => setConfirmVisible(true);
  const closeConfirm = () => setConfirmVisible(false);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 space-x-20">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={openModal}>Booking Details</button>
      <Modal isVisible={isModalVisible} onClose={closeModal} />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={openConfirm}>Confirm Details</button>
      <Confirm isVisible2={isConfirmVisible} onClose2={closeConfirm} />
    </div>
  );
}
