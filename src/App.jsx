import { useDispatch, useSelector } from 'react-redux';
import { Footer } from './views/Footer/Footer';
import { Header } from './views/Header/Header';
import { useEffect } from 'react';
import { fetchAccessToken } from './store/auth/authSlice';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Catalog } from './views/Catalog/Catalog';
import { Goods } from './views/Goods/Goods';
import { Cart } from './components/Cart/Cart';
import { Card } from './components/Card/Card';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/favorite',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/category',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/search',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <>
        <Header />
        <main>
          <Cart />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '/product/:productId',
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Card />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: '*',
    element: (
      <>
        <Header />
        <main>
          <NotFoundPage />
        </main>
        <Footer />
      </>
    ),
  },
]);

export const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  if (loading) return <div>Loading...</div>;

  return <RouterProvider router={router} />;
};
