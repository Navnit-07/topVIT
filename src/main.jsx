import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import Notes from './routes/Notes.jsx'
import Guidance from './routes/Guidance.jsx'
import Playlist from './routes/Playlist.jsx'
import PPT from './routes/PPT.jsx'
import EEE1001 from './routes/fullPlaylists/EEE1001.jsx'
import ECE2002 from './routes/fullPlaylists/ECE2002.jsx'
import MAT1001 from './routes/fullPlaylists/MAT1001.jsx'
import CSA2001 from './routes/fullPlaylists/CSA2001.jsx'
import MAT2003 from './routes/fullPlaylists/MAT2003.jsx'
import PHY1001 from './routes/fullPlaylists/PHY1001.jsx'
import CHY1001 from './routes/fullPlaylists/CHY1001.jsx'
import CHY1005 from './routes/fullPlaylists/CHY1005.jsx'
import PHY1003 from './routes/fullPlaylists/PHY1003.jsx'
import CSE2002 from './routes/fullPlaylists/CSE2002.jsx'
import CSE3004 from './routes/fullPlaylists/CSE3004.jsx'
import CSE1021 from './routes/fullPlaylists/CSE1021.jsx'
import MAT2002 from './routes/fullPlaylists/MAT2002.jsx'
import MEE2014 from './routes/fullPlaylists/MEE2014.jsx'
import CHY1006 from './routes/fullPlaylists/CHY1006.jsx'
import CSE2001 from './routes/fullPlaylists/CSE2001.jsx'
import CSE3011 from './routes/fullPlaylists/CSE3011.jsx'
import CSE3003 from './routes/fullPlaylists/CSE3003.jsx'
import CSE2006 from './routes/fullPlaylists/CSE2006.jsx'
import CSE3001 from './routes/fullPlaylists/CSE3001.jsx'
import Error from './routes/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
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
        element: <Playlist/>,
      },
      {
        path: '/ppt',
        element: <PPT/>,
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
