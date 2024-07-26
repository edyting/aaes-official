import { useState,useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import ProjectsDashboard from './pages/admin/ProjectsDashboard';
import GalleryDashboard from './pages/admin/GalleryDashboard';
import EventsDashboard from './pages/admin/EventsDashboard';
import ExecutivesDashboard from './pages/admin/ExecutivesDashboard';
import AddProject from './pages/admin/AddProject';
import EditProject from './pages/admin/EditProject';
import AddExecutives from './pages/admin/AddExecutives';
import EditExecutive from './pages/admin/EditExecutives';
import EditGallery from './pages/admin/EditGallery';
import EditEvent from './pages/admin/EditEvent';
import AddGallery from './pages/admin/AddGallery';
import AddEvent from './pages/admin/AddEvent';
import Login from './pages/admin/Login';
<<<<<<< HEAD

const router = createBrowserRouter(
  [{
    path: "/",
    element: < Layout / > ,
    errorElement: < ErrorPage / > ,
    children: [
        { index: true, element: < Home / > },
        { path: "/about", element: < About /> },
        { path: "/feed", element: < Feed/> },
        {path:"/projects",element:<Projects/>},
        {path:"/contact",element:<Contact/>},
        {path:"/gallery",element:<Gallery/>},
        {path:"/dash",element:<Dashboard/>},
        {path:"/projects/:id",element:<ProjectDetails/>},
        {path:"/pastevents",element:<Pastevents/>},
        {/* dashboard pages */},
        {path:"/dash/projects",element:<ProjectsDashboard/>},
        {path:"/dash/gallery/",element:<GalleryDashboard/>},
        {path:"/dash/events",element:<EventsDashboard/>},
        {path:"/dash/executives",element:<ExecutivesDashboard/>},
        {path:"/dash/addproject",element:<AddProject/>},
        {path:"/dash/addexecutives",element:<AddExecutives/>},
        {path:"/dash/addproject",element:<AddProject/>},
        {path:"/dash/addevent",element:<AddEvent/>},
        {path:"/dash/addgallery",element:<AddGallery/> },
        {path:"/dash/:id/editproject",element:<EditProject/>},
        {path:"/dash/:id/editexecutive",element:<EditExecutive/> },
        {path:"/dash/:id/editgallery",element:<EditGallery/>},
        {path:"/dash/:id/editevent",element:<EditEvent/>},
        {path:"/login",element:<Login/> },
    ]
}])
=======
import Layout from './components/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Feed from './pages/feed/Feed';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import ProjectDetails from './pages/projects/ProjectDetails';
import Pastevents from './pages/home/Pastevents';
import ErrorPage from './pages/ErrorPage';
import PrivateRoute from './components/PrivateRoutes';
import { checkAuthStatus } from './api/axiosInstance';
>>>>>>> 3f5ce241a87ee1f9d4fea2c54867d17631eeae90

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await checkAuthStatus();
      setIsAuthenticated(authStatus);
    };

    checkAuth();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/feed', element: <Feed /> },
        { path: '/projects', element: <Projects /> },
        { path: '/contact', element: <Contact /> },
        { path: '/gallery', element: <Gallery /> },
        { path: '/projects/:id', element: <ProjectDetails /> },
        { path: '/pastevents', element: <Pastevents /> },
        { path: '/login', element: <Login /> },
        {
          path: '/dash',
          element: (
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          ),
          children: [
            { index: true, element: <Navigate to="/dash/projects" /> },
            { path: 'projects', element: <ProjectsDashboard /> },
            { path: 'gallery', element: <GalleryDashboard /> },
            { path: 'events', element: <EventsDashboard /> },
            { path: 'executives', element: <ExecutivesDashboard /> },
            { path: 'addproject', element: <AddProject /> },
            { path: 'addexecutives', element: <AddExecutives /> },
            { path: 'addevent', element: <AddEvent /> },
            { path: 'addgallery', element: <AddGallery /> },
            { path: ':id/editproject', element: <EditProject /> },
            { path: ':id/editexecutive', element: <EditExecutive /> },
            { path: ':id/editgallery', element: <EditGallery /> },
            { path: ':id/editevent', element: <EditEvent /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
