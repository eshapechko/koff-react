import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../../components/CardItem/CardItem';
import { Container } from '../Container/Container';
import s from './Goods.module.scss';
import { fetchProducts } from '../../store/products/productsSlice';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { Pagination } from '../../components/Pagination/Pagination';

export const Goods = ({ title }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { data, loading, error, pagination } = useSelector(
    (state) => state.products,
  );
  const favoriteList = useSelector((state) => state.favorite.favoriteList);

  const [searchParam] = useSearchParams();
  const category = searchParam.get('category');
  const q = searchParam.get('q');
  const page = searchParam.get('page');

  useEffect(() => {
    if (pathname !== '/favorite') {
      dispatch(fetchProducts({ category, q, page }));
    }
  }, [dispatch, category, q, pathname, page]);

  useEffect(() => {
    if (pathname === '/favorite') {
      if (favoriteList) {
        const param = { list: favoriteList.join(','), page };
        dispatch(fetchProducts(param));
      }
    }
  }, [dispatch, favoriteList, pathname, page]);

  // const emptyPage = () => {
  //   if (pathname === '/favorite') {
  //     return (
  //       <h3 className={s.emptyFavorite}>Вы ничего не добавили в избранное</h3>
  //     );
  //   } else {
  //     return <p>По вашему запросу товаров не найдено</p>;
  //   }
  // };

  if (loading) return <Loader />;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className={s.goods}>
      <Container>
        <h2 className='visually-hidden'>{title}</h2>
        {data?.length ? (
          <>
            <ul className={s.list}>
              {data?.map((item) => (
                <li key={item.id}>
                  <CardItem {...item} />
                </li>
              ))}
            </ul>
            {pagination ? <Pagination pagination={pagination} /> : ''}
          </>
        ) : (
          <p>По вашему запросу товаров не найдено</p>
        )}
      </Container>
    </section>
  );
};
