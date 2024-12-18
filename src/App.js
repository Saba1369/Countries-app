import Header from "./components/header";
import "../src/index.css";
import { Routes, Route } from "react-router";
import { COUNTRY_ROUTE, HOME_ROUTE } from "./constant/routes";
import Home from "./pages/home";
import Country from "./pages/country";
import NotFound from "./pages/notFound";
import ThemeProvider from "./context/theme-provider";

function App() {
 
  return (
    <div className="flex flex-col items-center gap-4">
      <ThemeProvider>
      <Header/>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home/>} />
        <Route path={COUNTRY_ROUTE} element={<Country/>}/>
        <Route path={"*"} element={<NotFound/>}/>
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
