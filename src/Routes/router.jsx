import { createBrowserRouter } from "react-router";
import Home from "../Component/Pages/Home/Home";
import Education from "../Component/Pages/Education";
import Toggle from "../Layouts/Toggle";
import Experience from "../Component/Pages/Experience";
import Contact from "../Component/Pages/Home/Contact";
import Projects from "../Component/Pages/Projects";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Toggle />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'education',
                element: <Education />
            },
            {
            path: 'experience',
                element: <Experience />
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'contact',
                element: <Contact />
            },
        ]
    },

])