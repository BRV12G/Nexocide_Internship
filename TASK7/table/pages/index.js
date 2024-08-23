import { useState } from 'react';
import NewBankForm from '../components/NewBankForm';
import { FaFilter, FaEye } from 'react-icons/fa';

const initialData = [
  { number: 'ACC10023', account: 'Citi Bank (USD)', balance: '$0.000', reportingBalance: '$0.000', status: 'Active' },
  { number: 'ACC10024', account: 'Citi Bank (USD)', balance: '$2,814,000', reportingBalance: '$2,814,000', status: 'Active' },
  // Add more initial rows as needed
];

export default function Home() {
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const [showForm, setShowForm] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.number.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddBank = (newBank) => {
    setData((prevData) => [...prevData, newBank]);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Banks</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded p-2"
          />
          <FaFilter className="text-gray-500" />
          <button className="text-gray-500">Rules</button>
          <FaEye className="text-gray-500" />
          <button onClick={handleShowForm} className="bg-blue-500 text-white py-2 px-4 rounded">New Bank</button>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="border-gray-300">
          <tr>
            <th className="py-2 px-4 border border-gray-300">Select</th>
            <th className="py-2 px-4 border border-gray-300">NUMBER</th>
            <th className="py-2 px-4 border border-gray-300">ACCOUNT</th>
            <th className="py-2 px-4 border border-gray-300">BANK ACCOUNT</th>
            <th className="py-2 px-4 border border-gray-300">BALANCE</th>
            <th className="py-2 px-4 border border-gray-300">REPORTING BALANCE</th>
            <th className="py-2 px-4 border border-gray-300">STATUS</th>
            <th className="py-2 px-4 border border-gray-300">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border border-gray-300">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-4 border border-gray-300">{item.number}</td>
              <td className="py-2 px-4 border border-gray-300">{item.account}</td>
              <td className="py-2 px-4 border border-gray-300"></td>
              <td className="py-2 px-4 border border-gray-300">{item.balance}</td>
              <td className="py-2 px-4 border border-gray-300">{item.reportingBalance}</td>
              <td className="py-2 px-4 border border-gray-300"><span class="bg-green-100 rounded p-1 text-emerald-600">{item.status}</span></td>
              <td className="py-4 px-4 border border-gray-300">
                <a href="#" className="text-blue-500 underline">Reconcile</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <p>Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredData.length)} of {filteredData.length} entries</p>
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(filteredData.length / entriesPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`py-1 px-3 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      {showForm && (
        <NewBankForm onHideForm={handleHideForm} onAddBank={handleAddBank} />
      )}
    </div>
  );
}
