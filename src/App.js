import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Intro from './components/intro';
import SocialMedia from './components/socialMedia';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <SocialMedia />
    </div>
  );
}

export default App;
