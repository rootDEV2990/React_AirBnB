import './App.css';
import Header from "./views/default/Header";
import Home from "./views/pages/Home";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            {/*searchPage*/}

          </Route>
          <Route path="/">
            {/*home*/}
            <Home />

          </Route>

        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
