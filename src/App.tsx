import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Task3 } from "./tasks/Task3";
import { Home } from "./tasks/Home";
import { Task2 } from "./tasks/Task2";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/task2" component={Task2} exact />
          <Route path="/task3" component={Task3} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
