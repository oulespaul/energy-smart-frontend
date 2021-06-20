import { Switch, Route, Redirect } from "react-router-dom";

import { AppLayoutRoute } from "./Layouts";

import { Login } from "./Login";
import { Register } from "./Register";
import { LendingFeed } from "./LendingFeed";
import { LendingRequest } from "./LendingRequest";
import { Profile } from "./Profile";

import ProtectedRoute from "shared/components/ProtectedRoute";

const App = () => {
  return (
    <Switch>
      <Route path="/register" component={Register} />

      <Route path="/login" component={Login} />

      <Route path="/app/:path?/:param1?" exact>
        <AppLayoutRoute>
          <Switch>
            <ProtectedRoute exact path="/app/feed" component={LendingFeed} />

            <ProtectedRoute path="/app/profile" component={Profile} />

            <ProtectedRoute
              path="/app/lending-request/:plantId"
              component={LendingRequest}
            />
          </Switch>
        </AppLayoutRoute>
      </Route>

      <Redirect to="/app/feed" />
    </Switch>
  );
};

export default App;
