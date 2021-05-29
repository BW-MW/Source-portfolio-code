import "./App.css";
import SideNav from "./components/sidenav/sidenav.jsx";
import AboutMe from "./pages/AboutMe/index";

function App() {
  return (
    <div className="App">
      <SideNav />
      <AboutMe />
    </div>
  );
}

export default App;
