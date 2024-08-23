const OrderSummary = () => {
    return (
      <div className="p-4 ">
        <div className="flex justify-between items-center p-6 bg-blue-100 rounded mb-2">
          <div className="bg-white p-4 "><img src="download.png" alt="img1"></img></div>
          <div>
            <div className="text-2xl font-bold">154</div>
            <h3 className="text-lg">Total Orders</h3>
          </div>
        </div>
        <div className="flex justify-between items-center p-6 bg-red-100 rounded mb-2">
          <div className="bg-white p-4 "><img src="icons8-clock-30.png" alt="img1"></img></div>
          <div>
           <div className="text-2xl font-bold">05</div>
            <h3 className="text-lg ">Pending Orders</h3>
            
          </div>
        </div>
        <div className="flex justify-between items-center p-6 bg-green-100 rounded">
          <div className="bg-white p-4 "><img src="icons8-create-order-30.png" alt="img1"></img></div>
          <div>
          <div className="text-2xl font-bold">149</div>
            <h3 className="text-lg ">Completed Orders</h3>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default OrderSummary;
  