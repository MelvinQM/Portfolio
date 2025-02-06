import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Connect from './pages/Connect';
import Home from './pages/Home'
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar'
import ProjectView from './components/ProjectView';

import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <main >
        <Outlet />
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/portfolio-website', 
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'connect', element: <Connect /> },
      { 
        path: 'projects', 
        element: <Projects />, 
        children: [
          {
            path: ':projectId',
            element: <ProjectView />
          }
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
