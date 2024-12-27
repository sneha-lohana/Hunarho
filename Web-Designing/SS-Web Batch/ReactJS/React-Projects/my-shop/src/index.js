import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
// import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import { ThemeProvider } from './contexts/ThemeContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

const Contact = React.lazy(() => import('./pages/Contact'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/contact',
                element: (
                <React.Suspense>
                    <Contact />
                </React.Suspense>
                )
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/products/:prodId',
                element: <ProductDetail />
            },
            {
                // Wild Card Path/ route
                path: "*",
                // element: <Home/>
                element: (
                    <>
                        <h1>You are on wrong Page.</h1>
                    </>
                )
            }
        ]
    }
    
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <RouterProvider router={router}/>
    </ThemeProvider>
);