import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Sidebar from "../components/Sidebar"
import ThemeToggle from "../components/Toogle";
import CadastroProduto from "./CadastroProduto";

export default function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
 
  return (
    <Router>
     <div className="flex flex-col min-h-screen bg-slate-950 dark:bg-slate-100">
        <Header toggleSidebar={toggleSidebar}/>
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

        <main className="flex-1 p-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastroproduto" element={<CadastroProduto/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
              </main>
        <Footer />
      </div>
    </Router>
  );
}
