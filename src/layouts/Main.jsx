import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header/Header";
import "./Main.css";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
