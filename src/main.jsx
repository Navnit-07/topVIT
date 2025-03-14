import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import Notes from './layouts/Notes.jsx'
import Guidance from './layouts/Guidance.jsx'
import PlaylistFull from './layouts/PlaylistFull.jsx'
import PlaylistShort from './layouts/PlaylistShort.jsx'
import About from './layouts/About.jsx'
import Contact from './layouts/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <MainLayout/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/notes',
        element: <Notes/>,
      },
      {
        path: '/guidance',
        element: <Guidance/>,
      },
      {
        path: '/playlist',
        element: <PlaylistFull/>,
      },
      {
        path: '/last-minute-playlist',
        element: <PlaylistShort/>,
      },
      
      
      
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
