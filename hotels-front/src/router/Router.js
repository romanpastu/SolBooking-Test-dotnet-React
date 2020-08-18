import * as React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Main from "../Components/Main";
import Count from "../Components/Count";

const Router = () => {
    const renderFor404Routes = () => <Redirect to="/" />;
    return (
      <div>
        <Switch>
          <Route exactly component={Main} exact path="/" />
          <Route exactly component={Count} exact path="/count" />
          <Route path="/" exactly component={renderFor404Routes} />
        </Switch>
      </div>
    );
  };
  
  export default withRouter(Router);