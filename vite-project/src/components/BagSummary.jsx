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
    <div className="bag-summary">
       
     <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Delivery Fee</span>
      <span className="price-item-value">{finalItems.length>0 ? DeliveryFee:0}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
  )
}

export default BagSummary   