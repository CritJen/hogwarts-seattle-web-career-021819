import React, { Component } from "react";
import { Modal } from "semantic-ui-react";

const HogDeets = props => {
  let {
    name,
    speciality,
    greased,
    weight,
    "highest medal achieved": medal
  } = props;
  return (
    <Modal
      open
      closeOnEscape
      closeOnDimmerClick
      closeIcon
      onClose={() => {
        props.setActiveHog(null);
      }}
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content>
        <p>{speciality}</p>
        <p>Greased: {greased}</p>
        <p>Weight: {weight}</p>
        <p>Highest Medal Achieved: {medal}</p>
      </Modal.Content>
    </Modal>
  );
};

export default HogDeets;
