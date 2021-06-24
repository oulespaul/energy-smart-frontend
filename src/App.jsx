import { Switch, Route, Redirect } from "react-router-dom";

import { AppLayoutRoute } from "./Layouts";

import { Login } from "./Login";
import { Register } from "./Register";
import { LendingFeed } from "./LendingFeed";
import { LendingRequest } from "./LendingRequest";
import { Profile } from "./Profile";
import { LendingOffer } from "./LendingOffer";

import ProtectedRoute from "shared/components/ProtectedRoute";

import { AlertProvider } from "shared/context/alertContext";

const App = () => {
  return (
    <AlertProvider>
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

              <ProtectedRoute
                path="/app/lending-offer/:lendingId"
                component={LendingOffer}
              />
            </Switch>
          </AppLayoutRoute>
        </Route>

        <Redirect to="/app/feed" />
      </Switch>
    </AlertProvider>
  );
};

export default App;
