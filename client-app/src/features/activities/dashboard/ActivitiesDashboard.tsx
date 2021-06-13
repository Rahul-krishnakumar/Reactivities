import React, { useEffect } from "react";

import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";

import { Grid } from "semantic-ui-react";

import ActivityList from "./ActivityList";
import Spinner from "../../../app/layout/Spinner";

const ActivitiesDashboard = () => {
  const {
    activityStore: { loadingInitial, loadActivities, activityRegistry },
  } = useStore();

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [activityRegistry.size, loadActivities]);

  if (loadingInitial) return <Spinner content="Loading..." />;

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <h2>Activity Filter placeholder</h2>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivitiesDashboard);
