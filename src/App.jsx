import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Fixedbar from "./components/fixedbar";
import PopupContactForm from "./components/PopupContactForm";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/About";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <Header setSidebarOpen={setSidebarOpen}/>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <Fixedbar />
      <PopupContactForm />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;