import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<h1>Home page</h1>}></Route>
                    <Route path="/details" element={<h1>Details page</h1>}></Route>
                    <Route element={<h1></h1>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;