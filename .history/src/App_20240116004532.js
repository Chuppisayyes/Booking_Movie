import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Modules/Home/Pages/Home";
import Details from "./Modules/Details/pages/Details";
import Purchase from "./Modules/Purchase/page/Purchase";
import ManageUser from "./Modules/Manage-Admin/Component/ManageUser/ManageUser";
// import ManageMovie from "./Modules/Manage-Admin/Component/ManageMovie/ManageMovie";
import MainLayoutManage from "./Modules/Manage-Admin/Component/MainLayoutManage/MainLayoutManage";
import ProtectedRoute from "./routers/ProtectedRoute/ProtectedRoute";
import AdminMovie from "./Modules/AdminMovie/AdminMovie";
import UserProvider from "./Components/Context/UserContext.jsx";
import MainLayout from "./Components/MainLayout/MainLayout.jsx";
import 

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
            <Route element={<ProtectedRoute />}>
              <Route path="/Purchase/:Id" element={<Purchase />}></Route>
            </Route>
            <Route path="*" element={<h1>not found</h1>}></Route>
          </Route>
          <Route path="/manage-admin" element={<MainLayoutManage />}>
            <Route path="/manage-admin/:manageUser" element={<ManageUser />}></Route>
            <Route path="/manage-admin/:manageMovie" element={<AdminMovie />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
