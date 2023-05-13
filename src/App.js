import "./App.css";
import logo from "./assets/logo.svg";

import Profile from "./pages/Profile";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile userName="octocat" />
    </div>
  );
}
export default App;
