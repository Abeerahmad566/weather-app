import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./pages/TopBar/Topbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
