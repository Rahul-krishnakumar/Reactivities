import React from "react";

import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivitiesDashboard from "../../features/activities/dashboard/ActivitiesDashboard";

import { Switch, Route, useLocation } from "react-router-dom";

import { observer } from "mobx-react-lite";
import HomePage from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

function App() {
  const location = useLocation();
  return (
    <>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route path="/activities/:id">
                  <ActivityDetails />
                </Route>
                <Route path="/activities">
                  <ActivitiesDashboard />
                </Route>
                <Route
                  key={location.key}
                  path={["/createActivity", "/manage/:id"]}
                >
                  <ActivityForm />
                </Route>
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
