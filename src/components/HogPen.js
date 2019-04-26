import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import HogTile from "./HogTile.js";

const HogPen = props => {
  return (
    <Grid>
      {props.hogs.map(hog => (
        <HogTile hog={hog} setActiveHog={props.setActiveHog} />
      ))}
    </Grid>
  );
};

export default HogPen;
