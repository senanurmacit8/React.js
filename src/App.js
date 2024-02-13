import {
    BrowserRouter as Router, Routes,
    Route
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import PresentetionForm from "./pages/PresentetionForm";
import ListUsers from "./pages/ListUsers";

import MyButton from "./components/MyButton";
import ButtonList from "./components/ButtonList";

const App = () => {
    return (
        <div className="app">
            <Router>
                <MyButton to="" />
                <MyButton to="profile" />
                <MyButton to="about" />
                <MyButton to="presentetionForm" />
                <MyButton to="listUsers" />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/presentetionForm" element={<PresentetionForm />} />
                    <Route path="/listUsers" element={<ListUsers />} />
                </Routes>


            </Router>
        </div>
    )
}

export default App;