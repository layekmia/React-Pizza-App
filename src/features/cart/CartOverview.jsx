import { useSelector } from "react-redux";
import { Link } from "react-router";
import { totalCartPrice, totalCartQuantity } from "./cartSlice";

function CartOverview() {

  const totalNumOfCart = useSelector(totalCartQuantity); 
  const totalPrice = useSelector(totalCartPrice);
  
  if(!totalNumOfCart) return;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:p-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalNumOfCart} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
