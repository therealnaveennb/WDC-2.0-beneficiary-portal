import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ImageCarousel from'./components/carousel.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <ImageCarousel/>
       
      </header>
    </div>
  );
}

export default App;
