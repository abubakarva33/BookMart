import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header/Header";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
