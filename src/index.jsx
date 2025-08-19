import ReactDOM from "react-dom/client";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Headers from "./Components/Headers";
import Courses from "./Components/Courses";
import AboutUs from "./Components/AboutUs";
import UpcomingEvents from "./Components/UpcomingEvents";
import PromotionalBanner from "./Components/PromotionalBanner";
import FAQAndInstructors from "./Components/FAQAndInstructors";
import BackgroundVideo from "./Components/BackgroundVideo";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
// eslint-disable-next-line react-refresh/only-export-components
const AppLayout = () => {
  return (
    <div>
      {/* Additional components and content can be added here */}
      <NavBar />
      <Headers />
      <Courses/>
      <AboutUs/>
      <UpcomingEvents/>
      <PromotionalBanner/>
      <FAQAndInstructors/>
      <BackgroundVideo/>
      <Blog/>
      <Footer/>
      {/* You can add more components or routes here */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // children: [
    //   {
    //     path: "home",
    //     element: <NavBar />,
    //   },

    // ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
