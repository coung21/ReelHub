import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header/Header'
import MoviesPage from './pages/MoviesPage';
import TVShowPage from './pages/TVShowPage';
import RootLayout from './pages/RootLayout';
import Movie, {loader as getDetail} from './pages/Detail/MovieDetails';
import Tv from './pages/Detail/TvDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'movie',
        children: [
          {
            index: true,
            element: <MoviesPage />,
          },
          {
            path: ':id',
            element: <Movie />,
            loader: getDetail
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
            path: ':id',
            element: <Tv />,
            loader: getDetail
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
