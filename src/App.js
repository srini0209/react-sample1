import logo from './logo.svg';
import './App.css';
import Rajesh from './Rajesh.js';
import Header from './Header.js';
import { Content } from './Content.js';
import { Footer } from './Footer.js';


function App() {

  return (
    <div className="App">
      <div className='App-header'>
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
