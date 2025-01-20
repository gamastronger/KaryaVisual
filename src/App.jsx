import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./Views/Beranda";
import Portofolio from "./Views/Portofolio";
import Layanan from "./Views/Layanan";
import Pemesanan from "./Views/Pemesanan";
import LoginPage from "./Views/Login";
import Register from "./Views/Register";
import Message from "./Views/Message";
import Login from "./Views/Login";

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/pemesanan" element={<Pemesanan />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/message" element={<Message />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
