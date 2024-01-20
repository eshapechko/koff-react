import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../../components/CardItem/CardItem';
import { Container } from '../Container/Container';
import s from './Goods.module.scss';
import { fetchProducts } from '../../store/products/productsSlice';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';

export const Goods = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [searchParam] = useSearchParams();
  const category = searchParam.get('category');
  const q = searchParam.get('q');
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (location.pathname !== '/favorite') {
      dispatch(fetchProducts({ category, q }));
    }
  }, [dispatch, category, q, location.pathname]);

  if (loading) return <Loader />;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
        {data.length ? (
          <ul className={s.list}>
            {data?.map((item) => (
              <li key={item.id}>
                <CardItem {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <p>По вашему запросу товаров не найдено</p>
        )}
      </Container>
    </section>
  );
};
