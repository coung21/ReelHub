import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'

import Home from './pages/Home'
import MoviesPage from './pages/MoviesPage';
import TVShowPage from './pages/TVShowPage';
import RootLayout from './pages/RootLayout';
import Movie, { loader as getMovieDetail } from './pages/Detail/MovieDetails';
import Tv, { loader as getTvDetail } from './pages/Detail/TvDetails';

const router = createBrowserRouter([
  {

    path: '/ReelHub',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/ReelHub/movie',
        children: [
          {
            index: true,
            element: <MoviesPage />,
          },
          // Tuyến đường /ReelHub/movie: Đây là một tuyến đường con của /ReelHub. 
          //Nếu URL khớp với đường dẫn này, MoviesPage sẽ được hiển thị, 
          //và tuyến đường con trong children sẽ được xem xét.
          {
            path: '/ReelHub/movie/:id',
            element: <Movie />,
            loader: getMovieDetail,
          },
        ],
      },
      {
        path: '/ReelHub/tvshow',
        children: [
          {
            index: true,
            element: <TVShowPage />,
          },
          {
            path: '/ReelHub/tvshow/:id',
            element: <Tv />,
            loader: getTvDetail,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
