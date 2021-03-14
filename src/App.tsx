import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CurrencyList from './components/CurrencyList';
import Note from './components/Note';

const App: React.FC = () => {
  return (

    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/" render={() => <CurrencyList />} />
          <Route path="/note/:id" render={() => <Note />} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
