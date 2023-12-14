import "./App.css";
import "./styles/fonts.css";
import "./styles/reveal.css";
import { Layout } from "./components/shared";
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
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
