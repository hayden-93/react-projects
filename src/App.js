import "./App.css";
import { Backlog } from "./Pages/Backlog";
import { Board } from "./Pages/Board/Board";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Backlog />
    </div>
  );
}

export default App;
