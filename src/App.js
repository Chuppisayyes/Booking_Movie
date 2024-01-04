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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail:movies"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
