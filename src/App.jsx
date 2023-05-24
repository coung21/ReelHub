import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header/Header'
import MoviesPage from './pages/MoviesPage';
import TVShowPage from './pages/TVShowPage';
import RootLayout from './pages/RootLayout';
import Movie, {loader as getMovieDetail} from './pages/Detail/MovieDetails';
import Tv, {loader as getTvDetail} from './pages/Detail/TvDetails';

const router = createBrowserRouter([
  {
    path: '/ReelHub',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/movie',
        children: [
          {
            index: true,
            element: <MoviesPage />,
          },
          {
            path: '/movie/:id',
            element: <Movie />,
            loader: getMovieDetail
          }
        ]
      },
      {
        path: 'tvshow',
        children: [
          {
            index: true,
            element: <TVShowPage />,
          },
          {
            path: '/tvshow/:id',
            element: <Tv />,
            loader: getTvDetail
          }
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
