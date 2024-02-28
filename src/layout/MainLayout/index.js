// import pages
import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
import Header from "../../components/Header";
import Sidebar from "./sidebar";

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {

  return (
    <div  className="flex">
      <div className="md:fixed md:w-[15%] md:h-screen  md:visible invisible h-0">
         <Sidebar/>
      </div>
      <div className="md:w-[85%] md:left-[15%] h-screen relative">
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default MainLayout;
