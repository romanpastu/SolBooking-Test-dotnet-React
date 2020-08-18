import * as React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import HotelList from "../Components/HotelList";
import HotelPage from "../Components/HotelPage"
const Router = () => {
    const renderFor404Routes = () => <Redirect to="/" />;
    return (
      <div>
        <Switch>
          <Route exactly component={HotelList} exact path="/" />
          <Route exact path="/hotel/:name" component={HotelPage}  />
          <Route path="/" exactly component={renderFor404Routes} />
        </Switch>
      </div>
    );
  };
  
  export default withRouter(Router);