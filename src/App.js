import "./App.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default App;
