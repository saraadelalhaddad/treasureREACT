import "./App.css";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react";

import Routes from "./Router";

//styles
import { GlobalStyle } from "./styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Routes />
    </div>
  );
}

export default observer(App);
