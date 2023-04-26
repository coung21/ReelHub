import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header/Header'
import MoviesPage from './pages/MoviesPage';
import TVShowPage from './pages/TVShowPage';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'movies',
        element: <MoviesPage />
      },
      {
        path: 'tvshows',
        element: <TVShowPage />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
