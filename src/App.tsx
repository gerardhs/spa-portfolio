import "./App.css";
import { Layout } from "./components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./utils";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: ROUTES,
    },
  ]);

  return (
    <div className="bg-background h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
