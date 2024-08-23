import AccountInfo from "../components/AccountInfo";
import BillingAddress from "../components/BillingAddress";
import OrderSummary from "../components/OrderSummary";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Hello, Samantha Bowman</h1>
        <p className="text-gray-700">
          From your account dashboard, you can easily check & view your <a href="#" className="text-blue-500">Recent Orders</a>, manage your <a href="#" className="text-blue-500">Shipping and Billing Addresses</a> and edit your <a href="#" className="text-blue-500">Password and Account Details</a>.
        </p>
        <div className="bg-stone-100 grid grid-cols-1 md:grid-cols-3 gap-8">
          <AccountInfo />
          <BillingAddress />
          <OrderSummary />
        </div>
        
      </div>
    </div>
  );
}