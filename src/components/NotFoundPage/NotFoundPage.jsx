import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.scss';

export const NotFoundPage = () => (
  <div className={s.notFound}>
    <h1 className={s.title}>
      <span>😕</span>
      <br />
      Ничего не найдено
    </h1>
    <p className={s.description}>
      К сожалению данная страница отсутствует в нашем интернет-магазине
    </p>
    <Link to='/' className={s.btn}>
      На главную
    </Link>
  </div>
);
