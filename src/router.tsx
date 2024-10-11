import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo1 from "./demos/Demo1/Demo1";
import Demo2 from "./demos/Demo2/Demo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/demo1", element: <Demo1 /> },
      { path: "/demo2", element: <Demo2 /> },
      { path: "/demo3", element: <div>Demo3</div> },
      { path: "/demo4", element: <div>Demo4</div> },
    ],
  },
]);

export default router;
