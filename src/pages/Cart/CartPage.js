import { useTitle } from "../../hooks/useTitle";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context/CartContext"

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);
  const cartlistLength = 0

  return (
    <main>       
      { cartList.length ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}