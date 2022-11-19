import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import Home from "./components/Home.tsx";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  }
  ,
  {
    path: '/counter',
    element: <Counter />
  }
  ,
  {
    path: '/medalists',
    element: <FetchData />
  }
  ,
  {
    path: '/games',
    element: <FetchData />
  }
  ,
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
