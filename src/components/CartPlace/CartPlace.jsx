import { useSelector } from 'react-redux';
import s from './CartPlace.module.scss';
import { declOfNum } from '../../UTILS/declOfNum';

export const CartPlace = () => {
  const { totalCount, totalPrice, loadingFetch, error } = useSelector(
    (state) => state.cart,
  );

  const count = declOfNum(totalCount, ['товар', 'товара', 'товаров']);
  if (loadingFetch) return <div>Loading...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className={s.place}>
      <h3 className={s.subtitle}>Оформление</h3>
      <div className={s.placeInfo}>
        <p>{count} на сумму:</p>
        <p>{totalPrice?.toLocaleString()}&nbsp;₽</p>
      </div>
      <p className={s.placeDelivery}>Доставка 0 ₽</p>
      <button className={s.placeBtn}>Оформить заказ</button>
    </div>
  );
};
