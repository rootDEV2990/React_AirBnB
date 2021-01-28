import './App.css';
import Header from "./views/templates/Header";
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

          </Route>

        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
