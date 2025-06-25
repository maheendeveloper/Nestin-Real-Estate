import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Agents from "./pages/Agents";
import AgentProfile from "./components/AgentProfile";
import Sell from "./pages/Sell";
import Help from "./pages/Help";
import MapView from "./components/MapView";
import MapWithSidebar from "./components/MapwithSideBar";
import Rent from "./pages/Rent";


function AppLayout() {
  const location = useLocation();
  const HideHeaderFooterRoutes = ["/help"];
  const ShouldHideLayout = HideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!ShouldHideLayout && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent/>}/>
        <Route path="/findanagent" element={<Agents />} />
        <Route path="/agent/:name" element={<AgentProfile />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/help" element={<Help />} />
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
