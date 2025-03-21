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
import MAT2003 from './layouts/fullPlaylists/MAT2003.jsx'
import PHY1001 from './layouts/fullPlaylists/PHY1001.jsx'
import CHY1001 from './layouts/fullPlaylists/CHY1001.jsx'
import CHY1005 from './layouts/fullPlaylists/CHY1005.jsx'
import PHY1003 from './layouts/fullPlaylists/PHY1003.jsx'
import CSE2002 from './layouts/fullPlaylists/CSE2002.jsx'
import CSE3004 from './layouts/fullPlaylists/CSE3004.jsx'
import CSE1021 from './layouts/fullPlaylists/CSE1021.jsx'
import MAT2002 from './layouts/fullPlaylists/MAT2002.jsx'
import MEE2014 from './layouts/fullPlaylists/MEE2014.jsx'
import CHY1006 from './layouts/fullPlaylists/CHY1006.jsx'
import CSE2001 from './layouts/fullPlaylists/CSE2001.jsx'
import CSE3011 from './layouts/fullPlaylists/CSE3011.jsx'
import CSE3003 from './layouts/fullPlaylists/CSE3003.jsx'
import CSE2006 from './layouts/fullPlaylists/CSE2006.jsx'
import CSE3001 from './layouts/fullPlaylists/CSE3001.jsx'

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
      {
        path: 'full-playlists-mat2003',
        element: <MAT2003/>,
      },
      {
        path: '/full-playlists-phy1001',
        element: <PHY1001/>,
      },
      {
        path: '/full-playlists-chy1001',
        element: <CHY1001/>,
      },
      {
        path: '/full-playlists-chy1005',
        element: <CHY1005/>,
      },
      {
        path: '/full-playlists-phy1003',
        element: <PHY1003/>,
      },
      {
        path: '/full-playlists-cse2002',
        element: <CSE2002/>,
      },
      {
        path: '/full-playlists-cse3004',
        element: <CSE3004/>,
      },
      {
        path: '/full-playlists-cse1021',
        element: <CSE1021/>,
      },
      {
        path: '/full-playlists-mat2002',
        element: <MAT2002/>,
      },
      {
        path: '/full-playlists-mee2014',
        element: <MEE2014/>,
      },
      {
        path: '/full-playlists-chy1006',
        element: <CHY1006/>,
      },
      {
        path: '/full-playlists-cse2001',
        element: <CSE2001/>,
      },
      {
        path: '/full-playlists-cse3011',
        element: <CSE3011/>,
      },
      {
        path: '/full-playlists-cse3003',
        element: <CSE3003/>,
      },
      {
        path: '/full-playlists-cse2006',
        element: <CSE2006/>,
      },
      {
        path: '/full-playlists-cse3001',
        element: <CSE3001/>,
      },
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
