import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<h1></h1>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;