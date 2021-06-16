import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/style.css';
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <MovieList />
            </Route>
            <Route path="/movie/:id"> {/* с параметром что после двоеточия связан useParam в MovieDetailPage,они должны быть с одинаковым названием */}
              <MovieDetail />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

//npx json-server --watch src/db.json --port 8000 для сервера