import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Grafica from "./pages/Grafica";
import Velas from "./pages/Velas";
import Fotografia from "./pages/Fotografia";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/grafica" element={<Grafica />} />
            <Route path="/velas" element={<Velas />} />
            <Route path="/fotografia" element={<Fotografia />} />

            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
