import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import "./App.css";
import GamePage from "./pages/GamePage";

const App = () => {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/games" element={<GamePage />}></Route>
      </Routes>
    </section>
  );
};

export default App;
