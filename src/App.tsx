import "./App.css";
import { Layout } from "./components";
import { routes } from "./routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
