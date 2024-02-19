import "./App.css";
import Content from "./Containers/Content/Content";
import NavBar from "./Containers/Navbar/NavBar";
import Menu from "./Containers/menu/Menu";

function App() {
  return (
    <div>
      <NavBar />

      <Menu />

      <Content />
  </div>
  );
}

export default App;
