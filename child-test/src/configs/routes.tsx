
import { Suspense } from "react";
import { HelloPage } from "../pages/hello-page/hello-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HelloPage />,
    },
    {
      path: "*",
      element: <HelloPage />,
    }
  ]);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
