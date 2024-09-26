import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Wired from './pages/Wired.jsx'
import MovieRec from './pages/MovieRec.jsx'
import AimTrainer from './pages/AimTrainer.jsx'
import ObstacleCourse from './pages/ObstacleCourse.jsx'
import Protech from './pages/Protech.jsx'
import CorridorGame from './pages/CorridorGame.jsx'
import WeightFate from './pages/WeightFate.jsx'
import Threedee from './pages/3dShenanigans.jsx'
import Branding from './pages/Branding.jsx'
import StinkedIn from './pages/StinkedIn.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/StinkedIn",
    element: <StinkedIn />,
  },
  {
    path: "/Wired",
    element: <Wired />,
  },
  {
    path: "/MovieRec",
    element: <MovieRec />,
  },
  {
    path: "/AimTrainer",
    element: <AimTrainer />,
  },
  {
    path: "/ObstacleCourse",
    element: <ObstacleCourse />,
  },
  {
    path: "/Protech",
    element: <Protech />,
  },
  {
    path: "/CorridorGame",
    element: <CorridorGame />,
  },
  {
    path: "WeightFate",
    element: <WeightFate />,
  },
  {
    path: "/Threedee",
    element: <Threedee />,
  },
  {
    path: "/Branding",
    element: <Branding />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
