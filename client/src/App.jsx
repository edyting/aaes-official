import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import ErrorPage from './pages/ErrorPage';
import Feed from './pages/feed/Feed';
import Projects from './pages/projects/Projects';
import ProjectDetails from './pages/projects/ProjectDetails';
import Pastevents from './pages/home/Pastevents';

const router = createBrowserRouter(
  [{
    path: "/",
    element: < Layout / > ,
    errorElement: < ErrorPage / > ,
    children: [
        { index: true, element: < Home / > },
        { path: "/about", element: < About / > },
        { path: "/feed", element: < Feed/> },
        {path:"/projects",element:<Projects/>},
        {path:"/projects/:id",element:<ProjectDetails/>},
        {path:"/pastevents",element:<Pastevents/>},

    ]
}])

function App() {
    return (
       <RouterProvider router = { router } >

        </RouterProvider>
    );
}

export default App;