import { Suspense } from "react";
import { HelloPage } from "../pages/hello-page/hello-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { links } from "./links";
import { TestPage } from "../pages/test-page/test-page";
import { ResultPage } from "../pages/result-page/result-page";


const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HelloPage />,
    },
    {
      path: links.test,
      element: <TestPage />,
    },
    {
      path: links.result,
      element: <ResultPage />,
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
