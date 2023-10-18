import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

// import React from "react";
import Root from "./components/Root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
