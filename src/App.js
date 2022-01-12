import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lazy, Suspense, useState } from "react";

import "./sass/style.scss";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import PageNotFound from "./components/PageNotFound";

const MovieList = lazy(() => import("./components/MovieList"));
const MovieDetail = lazy(() => import("./components/MovieDetail"));

function App() {
  const [inputResult, setInputResult] = useState("");

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header setInputResult={setInputResult} />
            <Suspense fallback={<LoadingSpinner />}>
              <MovieList inputResult={inputResult} />
            </Suspense>
          </Route>
          <Route path="/movie/:id">
            <Suspense fallback={<LoadingSpinner />}>
              <MovieDetail />
            </Suspense>
          </Route>
          <Route path="*" exact={true}>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
