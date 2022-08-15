import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import NavBar from "./components/Navbar";
import SignInSide from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignInSide />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
