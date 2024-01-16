import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../../components/CardItem/CardItem';
import { Container } from '../Container/Container';
import s from './Goods.module.scss';
import { fetchProducts } from '../../store/products/productsSlice';
import { useEffect } from 'react';

export const Goods = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
        <ul className={s.list}>
          {data?.map((item) => (
            <li key={item.id}>
              <CardItem {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
