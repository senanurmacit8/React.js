import {
    BrowserRouter as Router, Routes,
    Route
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PresentetionForm from "./pages/PresentetionForm";
import PresentetionList from "./pages/PresentetionList";
import Presentetion from "./pages/Presentetion";
import ComponentRouter from "./pages/ComponentRouter";
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
                <MyButton to="presentetionList" />
                <ButtonList to="presentetion" />
                <MyButton to="componentRouter" />
                <MyButton to="listUsers" />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/presentetionForm" element={<PresentetionForm />} />
                    <Route path="/presentetionList"  element={<PresentetionList />} />
                    <Route path="/presentetion" element={<Presentetion />} />
                    <Route path="/componentRouter" element={<ComponentRouter />} />
                    <Route path="/listUsers" element={<ListUsers />} />
                </Routes>


            </Router>
        </div>
    )
}

export default App;