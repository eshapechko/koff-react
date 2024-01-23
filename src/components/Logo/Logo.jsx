import logoSvg from './logo.svg';
import s from './Logo.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../store/categories/categoriesSlice';

export const Logo = () => {
  const dispatch = useDispatch();

  const onClickLogo = () => {
    dispatch(changeCategory(null));
  };

  return (
    <Link className={s.link} to='/'>
      <img
        className={s.img}
        src={logoSvg}
        alt='Логотип мебельного маркета Koff'
        onClick={onClickLogo}
      />
    </Link>
  );
};
