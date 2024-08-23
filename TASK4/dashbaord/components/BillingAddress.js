const BillingAddress = () => {
    return (
      <div className="p-4 bg-white shadow rounded border border-black">
        <h2 className="text-lg font-bold mb-4 border-b border-black pb-2">BILLING ADDRESS</h2>
        <p className="font-bold">Kevin Gilbert</p>
        <p className="mt-2">East Tejturi Bazar, Ward No. 04, Road No. 13/k, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh</p>
        <p className="mt-2"><span className="font-bold">Phone:</span> +1-202-555-0118</p>
        <p className="mt-2"><span className="font-bold">Email:</span> kevin.gilbert@gmail.com</p>
        
        <button className="mt-5  px-4 py-2 bg-white-500 text-blue-500 border-4 border-blue-400 rounded">Edit Address</button>
      </div>
    );
  };
  
  export default BillingAddress;
  