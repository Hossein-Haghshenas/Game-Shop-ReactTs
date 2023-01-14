import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import AboutUs from "./pages/AboutUs";
import Wrapper from "./components/Wrapper";
import "./App.css";


const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/games" element={<GamesPage />}></Route>
          <Route path="/games/:gameId" element={<GamesPage />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
        </Routes>
      </Wrapper>
    </QueryClientProvider>
  );
};

export default App;
