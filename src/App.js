import {
    BrowserRouter as Router, Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";
import CreateUserForm from "./pages/CreateUserForm";
import CreatePeresentetionForm from "./pages/CreatePeresentetionForm";

import MyButton from "./components/MyButton";

const App = () => {
    return (
        <div className="app">
            <Router>
                <MyButton to="" />
                <MyButton to="listUsers" />
                <MyButton to="createUserForm" />
                <MyButton to="createPeresentetionForm" />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/listUsers" element={<ListUsers />} />
                    <Route path="/createUserForm" element={<CreateUserForm />} />
                    <Route path="/createPeresentetionForm" element={<CreatePeresentetionForm />} />
                </Routes>


            </Router>
        </div>
    )
}

export default App;