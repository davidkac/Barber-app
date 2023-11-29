import "./App.css";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root/Root";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path:"/about", element: <About />},
        { path: "/contact", element: <Contact /> },
        { path:"/services", element: <Services />}
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
