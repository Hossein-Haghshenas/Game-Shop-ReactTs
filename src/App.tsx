import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/games" element={<GamePage />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
