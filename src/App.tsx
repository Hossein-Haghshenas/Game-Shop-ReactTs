import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </section>
  );
};

export default App;
