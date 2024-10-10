import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo1 from "./demos/Demo1/Demo1";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/demo1", element: <Demo1 /> },
      { path: "/demo2", element: <div>Demo2</div> },
      { path: "/demo3", element: <div>Demo3</div> },
      { path: "/demo4", element: <div>Demo4</div> },
    ],
  },
]);

export default router;
