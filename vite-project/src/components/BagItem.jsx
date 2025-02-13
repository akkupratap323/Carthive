import { RiDeleteBin7Line } from "react-icons/ri";
import { bagActions } from "../store/bagSlice";
import { useDispatch } from "react-redux";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();

  const handlereMoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  }

  return (
    <>
      <div className="bag-item-container flex flex-col md:flex-row items-center bg-white p-4 rounded-md shadow-md mb-4 w-full">
        <div className="item-left-part w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <img className="bag-item-img object-cover w-full h-64 md:h-48 lg:h-64 rounded" src={item.image} alt={item.item_name} />
        </div>
        <div className="item-right-part w-full md:w-1/2 flex flex-col justify-center p-4">
          <div className="company font-bold text-lg mb-2">{item.company}</div>
          <div className="item-name text-gray-500 mb-2">{item.item_name}</div>
          <div className="price-container flex flex-wrap items-center space-x-2 mt-2">
            <span className="current-price font-semibold">Rs {item.current_price}</span>
            <span className="original-price line-through text-gray-400">Rs {item.original_price}</span>
            <span className="discount-percentage text-red-500">({item.discount_percentage}% OFF)</span>
          </div>
          <div className="return-period text-sm text-gray-400 mt-2">
            <span className="return-period-days font-semibold">{item.return_period} days</span> return available
          </div>
          <div className="delivery-details text-sm text-gray-400 mt-2">
            Delivery by <span className="delivery-details-days font-semibold">{item.delivery_date}</span>
          </div>
        </div>
        <div className="remove-from-cart mt-4 md:mt-0 md:ml-4 flex items-center justify-center text-red-500 cursor-pointer" onClick={handlereMoveFromBag}>
          <RiDeleteBin7Line size={24} />
        </div>
      </div>
    </>
  )
}

export default BagItem;
