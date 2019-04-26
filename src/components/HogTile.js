import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

const HogTile = props => {
  const { name, speciality, greased, weight } = props.hog;
  let imageName = name.toLowerCase().replace(/\s/g, "_");

  return (
    <Card onClick={() => props.setActiveHog(props.hog)}>
      <Image src={require(`../hog-imgs/${imageName}.jpg`)} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default HogTile;
