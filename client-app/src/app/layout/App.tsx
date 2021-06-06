import React, { useEffect } from "react";

import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivitiesDashboard from "../../features/activities/dashboard/ActivitiesDashboard";
import Spinner from "./Spinner";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <Spinner content="Loading..." />;
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivitiesDashboard />
      </Container>
    </>
  );
}

export default observer(App);
