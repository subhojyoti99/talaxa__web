import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Communities from './components/Communities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Shayari from './components/Shayari';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/communities" component={Communities} />
        <Route exact path="/communities/shayari" component={Shayari} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
  <Shayari/>
  <Footer/>

    </>
    
  );
}

export default App;
