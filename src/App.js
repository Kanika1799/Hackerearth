import "./App.css";
import HomePage from "./components/HomePage";
import { Route, Switch, HashRouter } from "react-router-dom";
import SongDetail from "./components/Results/Song/SongDetail";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/song-detail" component={SongDetail} />
          {/* <Route path="/song" component={Song} /> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
