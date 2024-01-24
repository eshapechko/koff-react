import s from './Card.module.scss';
import { useEffect } from 'react';
import { Container } from '../../views/Container/Container';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/product/productSlice';
import { Slider } from '../Slider/Slider';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { AddToCartButton } from '../addToCartButton/addToCartButton';

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
  if (!data) return <div>Продукт не найден, попробуйте позже</div>;

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
            <AddToCartButton className={s.btn} id={data?.id} />
            <FavoriteButton className={s.like} id={data?.id} />
          </div>
        </div>
      </Container>
    </section>
  );
};
