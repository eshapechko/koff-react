import { useDispatch, useSelector } from 'react-redux';
import s from './CartProducts.module.scss';
import { API_URL } from '../../const';
import { removeProductFromCart } from '../../store/cart/cartSlice';

export const CartProducts = () => {
  const dispatch = useDispatch();
  const { products, loadingFetch, error } = useSelector((state) => state.cart);

  if (loadingFetch) return <div>Loading...</div>;
  if (error) return <div>Ошибка: {error}</div>;

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
              onClick={() => dispatch(removeProductFromCart(item.id))}>
              -
            </button>
            <p className={s.productCount}>{item.quantity}</p>
            <button className={s.productBtn} onClick={() => {}}>
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
