import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Details from './pages/Details';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
