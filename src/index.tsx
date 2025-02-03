import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Connect from './pages/Connect';
import Home from './pages/Home'
import ProjectList from './pages/ProjectList';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar'
import Project from './pages/Project';

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
    path: '/',
    element: <AppLayout />, // Wrap all pages inside AppLayout
    children: [
      { index: true, element: <Home /> },
      { path: 'connect', element: <Connect /> },
      { 
        path: 'projects', 
        element: <ProjectList />, 
        children: [
          {
            path: ':projectId',
            element: <Project />
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
