import { Suspense } from "react";
import { HelloPage } from "../pages/hello-page/hello-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { links } from "./links";
import { TestPage } from "../pages/test-page/test-page";
import { ImagesPage } from "../pages/images-page/images-page";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HelloPage />,
    },
    {
      path: links.test,
      element: <TestPage />,
      children: [
        {
          path: "",
          element: <ImagesPage />,
        },
      ],
    },
    {
      path: "*",
      element: <HelloPage />,
    },
  ]);

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
