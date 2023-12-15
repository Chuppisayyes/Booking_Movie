import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Modules/Home/Pages/Home";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import MovieShowing from "./Modules/Home/Components/MovieShowing";
import Details from "./Modules/Details/pages/Details";
import MainLayout from "./Components/MainLayout/MainLayout";
import Signin from "./Modules/auth/pages/Signin";
import Signup from "./Modules/auth/pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Footer /> */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details/:movieId" element={<Details />}></Route>
            <Route path="/sign-in" element={<Signin />}></Route>
            <Route path="/sign-up" element={<Signup />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
