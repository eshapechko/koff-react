import { useEffect } from 'react';
import { Goods } from '../../components/Goods/Goods';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/categories/categoriesSlice';
import { Catalog } from '../../components/Catalog/Catalog';
import { fetchProducts } from '../../store/products/productsSlice';

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loadingCategories || loadingProducts) return <h2>Loading...</h2>;
  if (errorCategories) return <div>Ошибка: {errorCategories}</div>;
  if (errorProducts) return <div>Ошибка: {errorProducts}</div>;

  return (
    <main>
      <Catalog data={dataCategories} />

      <Goods data={dataProducts} />
    </main>
  );
};
