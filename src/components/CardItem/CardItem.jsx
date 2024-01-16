import { Link } from 'react-router-dom';
import { API_URL } from '../../const';
import s from './CardItem.module.scss';

export const CardItem = (props) => {
  const {
    id,
    name,
    price,
    images: [image],
  } = props;

  return (
    <article className={s.card}>
      <Link className={s.link} to={`/product/${id}`}>
        <img className={s.cardImg} src={`${API_URL}${image}`} alt={name} />
      </Link>
      <div className={s.cardInfo}>
        <h3 className={s.cardTitle}>
          <Link className={s.link} to={`/product/${id}`}>
            {name}
          </Link>
        </h3>
        <p className={s.price}>{price.toLocaleString()}&nbsp;₽</p>
      </div>
      <button className={s.cardBtn}>В корзину</button>
      <button className={s.favorite}>
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
    </article>
  );
};
