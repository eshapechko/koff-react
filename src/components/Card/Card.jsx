import s from './Card.module.scss';
import { useEffect } from 'react';
import { Container } from '../../views/Container/Container';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/product/productSlice';
import { Slider } from '../Slider/Slider';

export const Card = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const { data, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    }
  }, [dispatch, productId]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className={s.card}>
      <Container className={s.container}>
        <h2 className={s.title}>{data?.name}</h2>
        <Slider data={data} />
        <div className={s.info}>
          <p className={s.price}>{data?.price.toLocaleString()}&nbsp;₽</p>
          <p className={s.article}>арт. {data?.article}</p>

          <div className={s.characteristic}>
            <h3 className={s.characteristicTitle}>Общие характеристики</h3>
            <table className={s.table}>
              <tbody>
                {data?.characteristics?.map((item, i) => (
                  <tr key={i} className={s.row}>
                    <td className={s.field}>{item[0]}</td>
                    <td className={s.value}>{item[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={s.buttons}>
            <button className={s.btn}>В корзину</button>
            <button className={s.like}>
              <svg
                width='16'
                height='14'
                viewBox='0 0 16 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M8.41331 12.8733C8.18665 12.9533 7.81331 12.9533 7.58665 12.8733C5.65331 12.2133 1.33331 9.45998 1.33331 4.79332C1.33331 2.73332 2.99331 1.06665 5.03998 1.06665C6.25331 1.06665 7.32665 1.65332 7.99998 2.55998C8.67331 1.65332 9.75331 1.06665 10.96 1.06665C13.0066 1.06665 14.6666 2.73332 14.6666 4.79332C14.6666 9.45998 10.3466 12.2133 8.41331 12.8733Z'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
