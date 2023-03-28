import { createContext, useState } from "react";

const cartContext = createContext({
  cart: [],
  addItem: () => {},
  clearCart: () => {},
  removeProduct: () => {},
  getQuantity: () => {},
  getTotal: () => {},
});

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) => setCart(cart.filter((product) => product.id !== id));

  const getQuantity = () => {
    let cant = 0;
    cart.forEach((e) => (cant += e.quantity));
    return cant;
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((e) => (total += e.quantity * e.price));
    return total;
  };

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity, count: product.count + quantity }
            : product
        )
      );
    } else {
      setCart([...cart, { ...item, quantity, count: quantity }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addItem,
        clearCart,
        removeProduct,
        getQuantity,
        getTotal,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { CartContextProvider };
export default cartContext;
