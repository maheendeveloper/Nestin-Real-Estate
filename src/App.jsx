import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Agents from "./pages/Agents";
import AgentProfile from "./components/AgentProfile";
import Sell from "./pages/Sell";
import Help from "./pages/Help";
import Rent from "./pages/Rent";
import SignIn from "./pages/SignIn";
import Advertise from "./pages/Advertise";
import ManageRentals from "./pages/ManageRentals";

function AppLayout() {
  const location = useLocation();
  const HideHeaderFooterRoutes = ["/help","/signin"]; // Optional hide logic
  const ShouldHideLayout = HideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!ShouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/findanagent" element={<Agents />} />
        <Route path="/agent/:name" element={<AgentProfile />} />
        <Route path="/managerentals" element={<ManageRentals/>}/>
        <Route path="/advertise" element={<Advertise/>}/>
        <Route path="/sell" element={<Sell />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

      {!ShouldHideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
