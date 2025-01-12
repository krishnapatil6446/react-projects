import {useState}from "react";

function CurrencyConverter() {

  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);

  return (
    <div className="max-w-xl mx-auto my-10 p-5 text-orange-700 bg-white rounded-xl shadow-black ">
      <h2 className="mb-5 text-2xl font-semibold text-orange-700">
        Currency Converter
      </h2>
      <div>DropDowns</div>
      <div className="mt-4">
        <label htmlFor="amount" className="block text-sm font-medium ">Amount:</label>
        <input
        value={amount}
        onChange={(e)=> setAmount(e.target.value)}
        type="number"
      className="w-full p-2 border border-orange-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300" />
      </div>
      <div className="flex justify-end mt-6 ">
        <button className="px-5 py-2 bg-orange-400 text-white rounded-full hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Convert</button>
      </div>
      <div className="mt-4 text-lg font-medium text-right text-green-500">Converted Amount: 69 USD</div>
    </div>

  );
}

export default CurrencyConverter;
