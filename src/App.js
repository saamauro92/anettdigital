import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home'
import Footer from './components/Footer/Footer'
import Services from "./components/pages/Services/Services"
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (

    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
