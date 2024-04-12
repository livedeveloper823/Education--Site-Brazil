// import pages
import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
import Header from "../../components/Header";
import Sidebar from "./sidebar";
import { TimeoutProvider } from "../../provider/TimeOutProvider";

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  return (
    <div>
      <div className="md:fixed md:w-[15%] md:h-screen  md:visible invisible h-0">
        <Sidebar />
      </div>
      <div className="md:w-[85%] md:left-[15%] h-screen relative">
        <Header />
        <TimeoutProvider>
          <Outlet />
        </TimeoutProvider>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default MainLayout;
