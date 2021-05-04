import { Switch, Route } from "react-router-dom";

import { Login } from "./Login";
import { Register } from "./Register";

const App = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
};

export default App;
