import "./App.css";
import "./pages/index.js";
import "./pages/Work.js";
import "./pages/About.js";
import "./pages/Contact.js";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* with "/" -> recognized as home */}
        {/* routes */}
      </BrowserRouter>
    </div>
  );
}

export default App;
