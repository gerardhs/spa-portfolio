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
    <div className="bg-background h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
