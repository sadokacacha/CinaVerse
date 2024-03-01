import './App.css';
import NavBar from './Containers/Navbar/NavBar';
import Menu from './Containers/Menu/Menu.jsx';
import Content from './Containers/Content/Content';

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Menu />
        <Content />
        
      </div>
    </>
  );
}

export default App;
