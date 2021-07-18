import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/style.css';
import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail';
import { useState } from 'react';

function App() {

  const [inputResult, setInputResult] = useState('')

  return (
    <div className="App">
      <Router>
        <div>

          <Switch>
            <Route exact path="/">
              <Header setInputResult={setInputResult} />
              <MovieList inputResult={inputResult} />
            </Route>
            <Route path="/movie/:id">
              <MovieDetail />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

