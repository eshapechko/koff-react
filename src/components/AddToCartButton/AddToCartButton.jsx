import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToCart,
  removeProductFromCart,
} from '../../store/cart/cartSlice';

export const AddToCartButton = ({ className, id }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart.products);

  const isCart = product.find((item) => item?.id === id);

  const handleClick = () => {
    if (!isCart) {
      dispatch(addProductToCart({ productId: id, quantity: 1 }));
    } else {
      dispatch(removeProductFromCart(id));
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {isCart ? ' Из корзины' : ' В корзину'}
    </button>
  );
};
