import { HashRouter as Router } from "react-router-dom";

import "./App.css";
import SideNav from "./components/sidenav/sidenav.jsx";
import Routes from "./routes/Routes";

function App() {
  return (
    <main className="App">
      <SideNav />

      <section className="section">
        <Router>
          <Routes />
        </Router>
      </section>
    </main>
  );
}

export default App;
