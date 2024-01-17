import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Modules/Home/Pages/Home";
import Details from "./Modules/Details/pages/Details";
import Purchase from "./Modules/Purchase/page/Purchase";
import ManageUser from "./Modules/Manage-Admin/Component/ManageUser/ManageUser";
import MainLayoutManage from "./Modules/Manage-Admin/Component/MainLayoutManage/MainLayoutManage";
import ProtectedRoute from "./routers/ProtectedRoute/ProtectedRoute";
import UserProvider from "./Components/Context/UserContext.jsx";
import MainLayout from "./Components/MainLayout/MainLayout.jsx";
import Login from "./Modules/Auth/LogIn/Pages/LogIn.jsx";
import SignUp from "./Modules/Auth/SignUp/Pages/SignUp.jsx";
import AdminMovie from "./Modules/AdminMovie/AdminMovie.jsx";
import AdminProtextedRoute from "./routers/AdminProtectedRoute.jsx";
<<<<<<< HEAD
import UserInfor from "./Modules/Home/Components/UserInfor/UserInfor.jsx";
import MovieShowtimes from "./Modules/AdminMovie/MovieShowtimes/MovieShowtimes.jsx";
=======
>>>>>>> 9bc64714eeef07375b6aad673f226d167baf7c12

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/details/:movieID" element={<Details />}></Route>
            <Route path="/log-in" element={<Login />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/account" element={<UserInfor />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/Purchase/:Id" element={<Purchase />}></Route>
            </Route>
            <Route path="*" element={<h1>not found</h1>}></Route>
          </Route>
<<<<<<< HEAD
          <Route element={<AdminProtextedRoute />}>
            <Route path="/manage-admin" element={<MainLayoutManage />}>
              <Route path="/manage-admin/User" element={<ManageUser />}></Route>
              <Route path="/manage-admin/Movie" element={<AdminMovie />}></Route>
              <Route path="/manage-admin/showtimes/:movieId" element={<MovieShowtimes />} />
=======
          <Route path="/admin" element={<AdminProtextedRoute />}>
            <Route path="/admin" element={<MainLayoutManage />}>
              <Route path="/admin/User" element={<ManageUser />}></Route>
              <Route path="/admin/Movie" element={<AdminMovie />}></Route>
              <Route path="/manage-admin/showtimes/:movieId" element={<MovieShowtimes />} />
>>>>>>> 9bc64714eeef07375b6aad673f226d167baf7c12
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
