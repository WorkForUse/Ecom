import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './PagS/AboutPage';
import ContactPage from './PagS/ContactPage';
import HomePage from './PagS/HomePage';
import CategoryPage from './PagS/CategoryPage';
import ProductDetailsPAGE from './PagS/ProductDetailsPAGE';
import CartPage from './PagS/CartPage';
import CheckoutPage from './PagS/CheckoutPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component : App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'about',
        Component: AboutPage,
      },
      {
        path: 'contact',
        Component: ContactPage,
      },
      {
        path: 'category',
        Component: CategoryPage
      },
      {
        path: 'productDetails',
        Component: ProductDetailsPAGE
      },
      {
        path: 'cart',
        Component: CartPage
      },
      {
        path: 'checkout',
        Component: CheckoutPage
      }
    ],
  },
  {
    path:'*',
    Component:ErrorPage,
  }
]);