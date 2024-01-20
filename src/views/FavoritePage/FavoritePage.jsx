import { useEffect } from 'react';
import s from './FavoritePage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/products/productsSlice';
import { Goods } from '../Goods/Goods';

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite.favoriteList);

  useEffect(() => {
    if (favoriteList) {
      const param = { list: favoriteList };
      dispatch(fetchProducts(param));
    }
  }, [dispatch, favoriteList]);

  return favoriteList.length ? (
    <Goods />
  ) : (
    <h3 className={s.emptyFavorite}>Вы ничего не добавили в избранное</h3>
  );
};
