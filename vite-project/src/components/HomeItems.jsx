import { bagActions } from "../store/bagSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

const HomeItems = ({item}) => {

    const dispatch = useDispatch();
    const bagitems = useSelector(store => store.bag);
    const findItems =  bagitems.indexOf(item.id) >=0;
    console.log(item.id,findItems);

    const handleAddToBag = () => {
      dispatch(bagActions.addToBag(item.id));
    }

    const handlereMoveFromBag = () => {
        dispatch(bagActions.removeFromBag(item.id));
    }
   
    return  <div className="item-container">
    <img className="item-image" src={item.image} alt="item image"/>
    <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
    </div>
    <div className="company-name">{item.company}</div>
    <div className="item-name">{item.item_name}</div>
    <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
    </div>

     {!findItems ? <button type="button" className=" btn-add-bag btn btn-success"  onClick={handleAddToBag} > Add to Bag</button> : <button type="button" className="btn-add-bag btn btn-danger"onClick = {handlereMoveFromBag}><MdDelete />   Remove</button>}  
  
   
    
  </div>
    
}

export default HomeItems;