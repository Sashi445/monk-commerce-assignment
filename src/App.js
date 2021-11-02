import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Albums from "./components/Albums";
import Photos from './components/Photos';

import "./App.css";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/albums/:id" exact component={Albums}/>
        <Route path="/photos/:id" exact component={Photos}/>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
