import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/style.css';
import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail';
import { useState } from 'react';

function App() {

  //нельзя передавать пропсы от дитя к родителю,но функции можно(также context передает данные от родителя к детям (как и props только пропс передаёт прямому ребенку по цепочке) с той разницы что компоненты обёрнутые контекст провайдер получают данные от контекста и их дети и дети их детей,без того чтобы по цепочке передовать как с props)

  const [inputResult, setInputResult] = useState('') //так я передал (результат ввода) значения из компонента header в компонент movielist

  return (
    <div className="App">
      <Router>
        <div>

          <Switch>
            <Route exact path="/">
              <Header setInputResult={setInputResult} />
              <MovieList inputResult={inputResult} />
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