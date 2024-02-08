import {
  BrowserRouter as Router, Routes,
  Route
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PresentetionForm from "./pages/PresentetionForm";

import MyButton from "./components/MyButton";

const App = () => {
  return (
      <div className="app">
          <Router>
              <MyButton to="" />
              <MyButton to="profile" />
              <MyButton to="about" />
              <MyButton to="presentetionForm" />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile"
                      element={<Profile />} />
                  <Route path="/about"
                      element={<About />} />
                  <Route path="/presentetionForm"
                      element={<PresentetionForm />} />
              </Routes>
          </Router>
      </div>
  )
}

export default App;