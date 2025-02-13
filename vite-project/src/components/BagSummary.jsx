import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagId = useSelector(state => state.bag);
  const items = useSelector(state => state.items);
  const finalItems = items.filter(item => bagId.includes(item.id));

  const DeliveryFee = 99;

  let totalItem = finalItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + DeliveryFee;

  return (
    <div className="bag-summary bg-white p-4 rounded-md shadow-md mt-4 lg:mt-0 w-full lg:flex-none"> {/* Full width and flex adjustments */}
      <div className="bag-details-container">
        <div className="price-header font-bold text-lg mb-2">PRICE DETAILS ({totalItem} Items)</div>
        <div className="price-item flex justify-between mb-2">
          <span className="price-item-tag text-gray-500">Total MRP</span>
          <span className="price-item-value font-semibold">₹{totalMRP}</span>
        </div>
        <div className="price-item flex justify-between mb-2">
          <span className="price-item-tag text-gray-500">Discount on MRP</span>
          <span className="price-item-value font-semibold text-green-500">-₹{totalDiscount}</span>
        </div>
        <div className="price-item flex justify-between mb-2">
          <span className="price-item-tag text-gray-500">Delivery Fee</span>
          <span className="price-item-value font-semibold">{finalItems.length > 0 ? `₹${DeliveryFee}` : "Free"}</span>
        </div>
        <hr className="my-4" />
        <div className="price-footer flex justify-between font-bold text-lg">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-md">
        PLACE ORDER
      </button>
    </div>
  )
}

export default BagSummary;
