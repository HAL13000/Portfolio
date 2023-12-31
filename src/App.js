import "./App.css";
import Index from "./pages/Index/Index.js";
import Work from "./pages/Work/Work.js";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeColor/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Index />} />
            <Route path={"/work"} element={<Work />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
export default App;

// Router ---> npm i react-router-dom
