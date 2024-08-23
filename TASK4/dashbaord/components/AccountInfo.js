const AccountInfo = () => {
    return (
      <div className="p-4 bg-white shadow rounded border border-black">
        <h2 className="text-lg font-bold mb-4 border-b border-black pb-2">Account Info</h2>
        <div className="flex items-center space-x-4">
          <img
            src="kevin.webp"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="text-lg font-bold">Kevin Gilbert</h3>
            <p className="text-gray-600">Dhaka - 1207, Bangladesh</p>
          </div>
        </div>
        <div className="mt-4">
          <p><span className="font-bold">Email:</span> kevin.gilbert@gmail.com</p>
          <p className="mt-2"><span className="font-bold">Sec Email:</span> kevin12345@gmail.com</p>
          <p className="mt-2"><span className="font-bold">Phone:</span> +1-202-555-0118</p>
          <div className="mt-4 md-4 "><button className="mt-2 px-4 py-2 bg-white-500 text-blue-500 border-4 border-blue-400 rounded">Edit Account</button></div>
        </div>
      </div>
    );
  };
  
  export default AccountInfo;