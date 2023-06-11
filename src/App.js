import './Reset.css';
import './App.scss';
import Router from "./routes/Router"
import Nav from "./components/Nav"
import "./js/main"
import "./js/slider"

function App() {
  return (
    <div className="App">
      
      <Nav />
      <Router />
     
    </div>
  );
}

export default App;
