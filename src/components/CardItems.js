import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItems";
import { clearCart } from "../utils/cartSlice";

const CardItems = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  const dispatch =useDispatch();
  const handleClearCart =()=>{
    dispatch(clearCart())
  }
  return (
    <div>
      <h1 className="font-bold text-3xl">
        Cart Items - {cartItems.length}
        <button className="bg-green-100 p-2 m-5" onClick={()=>handleClearCart()}>Clear Cart </button>
      </h1><div className="flex flex-wrap   ">
      {cartItems.map((item, index) => (
        <FoodItem key={index} {...item.card.info} />
      ))}
      </div>
    </div>
  );
};

export default CardItems;
