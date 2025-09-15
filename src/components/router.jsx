import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Body from "./Body.jsx";
import About from "./About.jsx";
import Error from "./Error.jsx";
import Contact from "./Contact.jsx";
import RestaurentMenu from "./RestaurentMenu.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/restaurents/:resId",
        element: <RestaurentMenu />,
      },
    ],
  },
]);

export default appRouter;
