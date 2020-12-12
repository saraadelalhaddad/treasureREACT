import "./App.css";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react";

import Routes from "./Router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes />
      </header>
    </div>
  );
}

export default observer(App);
