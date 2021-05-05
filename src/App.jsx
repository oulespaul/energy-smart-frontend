import { Switch, Route } from "react-router-dom";

import { AppLayoutRoute } from "./Layouts";

import { Login } from "./Login";
import { Register } from "./Register";
import { LendingFeed } from "./LendingFeed";
import { LendingRequest } from "./LendingRequest";
import { Profile } from "./Profile";

const App = () => {
  return (
    <Switch>
      <Route path="/register" component={Register} />

      <Route path="/login" component={Login} />

      <AppLayoutRoute>
        <Switch>
          <Route exact path="/" component={LendingFeed} />

          <Route path="/profile" component={Profile} />

          <Route path="/lending/request" component={LendingRequest} />
        </Switch>
      </AppLayoutRoute>
    </Switch>
  );
};

export default App;
