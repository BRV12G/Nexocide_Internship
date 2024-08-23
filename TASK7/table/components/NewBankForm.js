import { useState } from 'react';

export default function NewBankForm({ onHideForm, onAddBank }) {
  const [formData, setFormData] = useState({
    number: '',
    account: '',
    balance: '',
    reportingBalance: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBank(formData);  // Pass form data to the callback
    onHideForm();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Add New Bank</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Account</label>
            <input
              type="text"
              name="account"
              value={formData.account}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Balance</label>
            <input
              type="text"
              name="balance"
              value={formData.balance}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Reporting Balance</label>
            <input
              type="text"
              name="reportingBalance"
              value={formData.reportingBalance}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Status</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onHideForm} className="bg-gray-300 p-2 rounded mr-2">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
