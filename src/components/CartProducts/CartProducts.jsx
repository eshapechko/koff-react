import { useDispatch } from 'react-redux';
import s from './CartProducts.module.scss';
import { API_URL } from '../../const';
import {
  removeProductFromCart,
  updateProductToCart,
} from '../../store/cart/cartSlice';

export const CartProducts = ({ products }) => {
  const dispatch = useDispatch();

  const handleMinus = (id, quantity) => {
    if (quantity > 1) {
      dispatch(
        updateProductToCart({
          productId: id,
          quantity: quantity - 1,
        }),
      );
    } else {
      dispatch(removeProductFromCart(id));
    }
  };

  const handlePlus = (id, quantity) => {
    dispatch(
      updateProductToCart({
        productId: id,
        quantity: quantity + 1,
      }),
    );
  };

  return (
    <ul className={s.products}>
      {products?.map((item) => (
        <li className={s.product} key={item.id}>
          <img
            className={s.img}
            src={`${API_URL}${item.images[0]}`}
            alt={item.name}
          />
          <h3 className={s.titleProduct}>{item.name}</h3>
          <p className={s.price}>{item.price.toLocaleString()}&nbsp;₽</p>
          <p className={s.article}>арт. {item.article}</p>

          <div className={s.productControl}>
            <button
              className={s.productBtn}
              onClick={() => handleMinus(item.id, item.quantity)}>
              -
            </button>
            <p className={s.productCount}>{item.quantity}</p>
            <button
              className={s.productBtn}
              onClick={() => handlePlus(item.id, item.quantity)}>
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
