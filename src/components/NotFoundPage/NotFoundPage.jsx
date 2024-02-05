import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.scss';

export const NotFoundPage = () => (
  <div className={s.notFound}>
    <h1 className={s.title}>
      <span>😕</span>
      <br />
      Ничего не найдено
    </h1>
    <p className={s.description}>Произошла ошибка, попробуйте зайти позже</p>
    <Link to='/' className={s.btn}>
      На главную
    </Link>
  </div>
);
