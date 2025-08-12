// routes.jsx
import { createBrowserRouter } from "react-router";
import Header from "./Components/Header/Header";
import Projects from "./Components/AboutMe/Projects";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Header/>
    },
    {
        path: "/projects",
        element: <Projects />,
    }
]);
