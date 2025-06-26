import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/header/Header";
import MainPages from "./components/pages/main/mainPages";
import Admin from "./components/pages/admin/Admin";
import Product from "./components/pages/product/Product";
import Details from "./components/pages/details/Details";
import Basket from "./components/pages/basket/Basket";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Favorite from "./components/pages/favorite/Favorite";

function App() {
  const dark = useSelector((s) => s.dark);
  const routes = [
    {
      id: 1,
      path: "/",
      element: <MainPages />,
    },
    {
      id: 2,
      path: "/admin",
      element: <Admin />,
    },
    {
      id: 3,
      path: "/product",
      element: <Product />,
    },
    {
      id: 4,
      path: "/details/:productId",
      element: <Details />,
    },
    {
      id: 5,
      path: "/basket",
      element: <Basket />,
    },
    {
      id: 6,
      path: "/favorite",
      element: <Favorite/>
    },
  ];
  return (
    <div
      className="app"
      style={{
        background: dark ? "white" : "black",
        color: !dark ? "white" : "black",
      }}
    >
      <Header />
      <ToastContainer />
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
