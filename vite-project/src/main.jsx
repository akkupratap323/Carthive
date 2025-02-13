import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './routes/App.jsx';
import { RouterProvider } from 'react-router-dom';
import Bag from './routes/Bag.jsx';
import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './routes/Profile';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/index'; // Ensure the correct casing here

import Home2 from './routes/Home2';
import Content from './routes/Content';
import NewsCard from './components/NewsCard';
import Stocks from './components/Stocks';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home2 /> },
      { path: '/News', element: <NewsCard /> },
      { path: '/shop', element: <Home /> },
      { path: '/bag', element: <Bag /> },
      { path: '/profile', element: <Profile /> },
      { path: '/content', element: <Content /> },
      { path: '/stocks', element: <Stocks /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={routes} />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
