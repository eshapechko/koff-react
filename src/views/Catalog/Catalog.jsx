import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../Container/Container';
import s from './Catalog.module.scss';
import { useEffect } from 'react';
import {
  changeCategory,
  fetchCategories,
} from '../../store/categories/categoriesSlice';
import { Link } from 'react-router-dom';
import cn from 'classnames';

export const Catalog = () => {
  const dispatch = useDispatch();

  const { data, loading, error, activeCategory } = useSelector(
    (state) => state.categories,
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <nav className={s.catalog}>
      <Container className={s.container}>
        <ul className={s.list}>
          {data.map((item, i) => (
            <li key={i}>
              <Link
                className={cn(
                  s.link,
                  activeCategory === i ? s.link_active : '',
                )}
                to={`/category?category=${item}`}
                onClick={() => dispatch(changeCategory(i))}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
