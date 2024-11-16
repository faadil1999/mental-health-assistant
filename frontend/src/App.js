import logo from "./logo.svg";
import "./App.css";
import { Camera } from "lucide-react";
import { Home } from "lucide-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className=" text-red-600 bg-green-400">
          Je suis la pour faire les tests
        </p>
        <div className="flex flex-row space-x-3">
          <Camera />
          <Home />
        </div>
      </header>
    </div>
  );
}

export default App;
