import { Link } from 'react-router-dom';
import { API_URL } from '../../const';
import s from './CardItem.module.scss';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { AddToCartButton } from '../addToCartButton/addToCartButton';

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
      <AddToCartButton className={s.cardBtn} id={id} />
      <FavoriteButton className={s.favorite} id={id} />
    </article>
  );
};
