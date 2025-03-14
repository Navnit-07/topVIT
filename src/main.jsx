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
import EEE1001 from './layouts/fullPlaylists/EEE1001.jsx'
import ECE2002 from './layouts/fullPlaylists/ECE2002.jsx'
import MAT1001 from './layouts/fullPlaylists/MAT1001.jsx'
import CSA2001 from './layouts/fullPlaylists/CSA2001.jsx'

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
      {
        path: '/full-playlists-eee1001',
        element: <EEE1001/>,
      },
      {
        path: 'full-playlists-ece2002',
        element: <ECE2002/>,
      },
      {
        path: 'full-playlists-mat1001',
        element: <MAT1001/>,
      },
      {
        path: 'full-playlists-csa2001',
        element: <CSA2001/>,
      },
      
      
      
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
