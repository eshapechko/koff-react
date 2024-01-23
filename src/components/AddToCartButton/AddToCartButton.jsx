import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/cart/cartSlice';

export const AddToCartButton = ({ className, id }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addProductToCart({ productId: id, quantity: 1 }));
  };

  return (
    <button className={className} onClick={handleClick}>
      В корзину
    </button>
  );
};
