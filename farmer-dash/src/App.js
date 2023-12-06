import logo from './logo.svg';
import './App.css';
import Mainlayout from './components/layout/Mainlayout.js';
import ImageCarousel from'./components/carousel.js';


function App() {
  return (
    <div className="App">
      <Mainlayout/>
       <header className="App-header">
        <ImageCarousel/>
       
      </header>
    </div>
  );
}

export default App;
