import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Modules/Home/Pages/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/details" element={<h1>Details page</h1>}></Route>
                    <Route path="*"element={<h1>NOT-FOUND</h1>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;