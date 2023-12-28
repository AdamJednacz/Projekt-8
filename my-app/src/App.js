import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="shop" element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
