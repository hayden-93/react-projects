import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.svg";

import Profile from "./pages/Profile";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile userName="octocat" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
