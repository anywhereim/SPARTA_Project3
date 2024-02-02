import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Detail from "./Pages/Detail";
import Solar from "./components/rootpages/Solar";
import MoonByul from "./components/rootpages/MoonByul";
import HwaSa from "./components/rootpages/HwaSa";
import WheEin from "./components/rootpages/WheEin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      { path: "solar", element: <Solar /> },
      { path: "Moonbyul", element: <MoonByul /> },
      { path: "hwasa", element: <HwaSa /> },
      { path: "wheein", element: <WheEin /> },
    ],
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "*",
    element: <Navigate replace to="/" />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
