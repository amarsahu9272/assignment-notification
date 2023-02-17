import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";

function App() {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
}

export default App;
