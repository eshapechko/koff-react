import { useDispatch } from 'react-redux';
import { CartForm } from '../../components/CartForm/CartForm';
import { CartPlace } from '../../components/CartPlace/CartPlace';
import { CartProducts } from '../../components/CartProducts/CartProducts';
import { Container } from '../Container/Container';
import s from './Cart.module.scss';
import { useEffect } from 'react';
import { fetchCart } from '../../store/cart/cartSlice';

export const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <section className={s.cart}>
      <Container className={s.container}>
        <h2 className={s.title}>Корзина</h2>
        <CartProducts />
        <CartPlace />
        <CartForm />
      </Container>
    </section>
  );
};
