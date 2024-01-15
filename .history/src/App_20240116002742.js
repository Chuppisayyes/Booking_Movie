import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Modules/Home/Pages/Home";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import Details from "./Modules/Details/pages/Details";
import MainLayout from "./Components/MainLayout/MainLayout";
import Signin from "./Modules/auth/pages/Signin";
import Signup from "./Modules/auth/pages/Signup";
import MovieShowing from "./Modules/Home/Components/MovieShowing/MovieShowing";
import ModalMovies from "./Components/Modals/ModalMovies";
import ShowTime from "./Modules/Details/component/ShowTime";
import Purchase from "./Modules/Purchase/page/Purchase";
import ManageUser from "./Modules/Manage-Admin/Component/ManageUser/ManageUser";
// import ManageMovie from "./Modules/Manage-Admin/Component/ManageMovie/ManageMovie";
import MainLayoutManage from "./Modules/Manage-Admin/Component/MainLayoutManage/MainLayoutManage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details/:movieID" element={<Details />}></Route>
            <Route path="/Purchase/:Id" element={<Purchase />}></Route>

            <Route path="*" element={<h1>not found</h1>}></Route>
          </Route>
          <Route path="/manage-admin" element={<MainLayoutManage />}>
            <Route path="/manage-admin/:manageUser" element={<ManageUser />}></Route>
            <Route path="/manage-admin/:manageMovie" element={<AdminMovie />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
