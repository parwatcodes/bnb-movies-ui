import React, { Component, Fragment } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route path="/profile/ticket" component={Ticket} />
          <Route path="/profile/changepassword" component={ChangePassword} />
          <Route path="/profile/logout" component={Logout} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(Profile);