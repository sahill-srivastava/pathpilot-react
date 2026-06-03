import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Careers from "../pages/Careers";
import Roadmaps from "../pages/Roadmaps";
import Quiz from "../pages/Quiz";
import Bookmarks from "../pages/Bookmarks";
import ProgressTracker from "../pages/ProgressTracker";
import About from "../pages/About";
import PageNotFound from "../pages/PageNotFound";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "roadmaps",
        element: <Roadmaps />,
      },
      {
        path: "quiz",
        element: <Quiz />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "progress-tracker",
        element: <ProgressTracker />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default appRouter;
