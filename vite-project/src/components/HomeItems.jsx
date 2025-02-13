import { bagActions } from "../store/bagSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagitems = useSelector(store => store.bag);
  const findItems = bagitems.indexOf(item.id) >= 0;
  console.log(item.id, findItems);

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  }

  const handlereMoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  }

  return (
    <div className="item-container flex flex-col bg-white p-4 rounded-md shadow-md w-full md:w-1/3 mb-4">
      <img className="item-image object-cover w-full h-48 md:h-64 lg:h-80 rounded-md mb-4" src={item.image} alt="item image" />
      <div className="item-details flex flex-col items-center md:items-start w-full">
        <div className="rating text-sm text-gray-500 mb-2">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name font-bold text-lg mb-1">{item.company}</div>
        <div className="item-name text-gray-700 mb-1">{item.item_name}</div>
        <div className="price text-sm text-gray-500 mb-2">
          <span className="current-price font-semibold text-black">Rs {item.current_price}</span>
          <span className="original-price line-through ml-2">Rs {item.original_price}</span>
          <span className="discount text-red-500 ml-2">({item.discount_percentage}% OFF)</span>
        </div>

        {!findItems ? (
          <button type="button" className="btn-add-bag bg-green-500 text-white py-2 px-4 rounded-md mt-2" onClick={handleAddToBag}>
            Add to Bag
          </button>
        ) : (
          <button type="button" className="btn-add-bag bg-red-500 text-white py-2 px-4 rounded-md mt-2 flex items-center" onClick={handlereMoveFromBag}>
            <MdDelete className="mr-1" /> Remove
          </button>
        )}
      </div>
    </div>
  );
}

export default HomeItems;
