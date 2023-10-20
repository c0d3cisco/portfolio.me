import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);


const App = () => {

  const Loader = () => {


    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span className="canvas-load"></span>
        <p
          style={{
            fontSize: 14,
            color: "white",
            fontWeight: "800",
            marginTop: 40,
          }}
        >
          {'Loading... Thank you for your patience :)'}
        </p>
      </div>
    );
  };
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
