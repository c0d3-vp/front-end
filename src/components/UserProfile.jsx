import React, { useState } from "react";
import {
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner
} from "reactstrap";
import Event from "./items/Event";
import Countdown from './Countdown'
import { connect } from "react-redux";

//All userInformation stored on Profile Page
//Next user
//Open user-Card for more information
//Update Profile

const mapStateToProps = (state) => {
  return {
    username: state.username,
    imageUrl: state.imageUrl,
    potlucks: state.potlucks,
    isLoading: state.isLoading
  };
};

function UserProfile(props) {
  const [eventModal, setEventModal] = useState(false);
  const eventToggle = () => setEventModal(!eventModal);

  return (
    <>
    {props.isLoading ? <Spinner color = "info"/> : null}
      <Jumbotron id = "new-jumbotron">

        <h1 className="display-3">Hello, {props.username}!</h1>

        <hr className="my-2" />
        <p>Your next event is in <Countdown potluck = {props.potlucks[0]}/></p>
        <p className="lead">
          <Button className="bg-addon" onClick={eventToggle}>
            Learn More
          </Button>
        </p>
      </Jumbotron>


      <Modal isOpen={eventModal} toggle={eventToggle}>
        <ModalHeader toggle={eventToggle}>
          <h2>Event Information</h2>
        </ModalHeader>
        <ModalBody>
        <Event
            key={props.potlucks[0].potluckId}
            potluckId={props.potlucks[0].potluckId}
            host={props.username}
            eventName={props.potlucks[0].eventName}
            date={props.potlucks[0].date}
            time={props.potlucks[0].time}
            location={props.potlucks[0].location}
            description={props.potlucks[0].description}
            foods={props.potlucks[0].foods}
            guests={props.potlucks[0].guests}
            isHost={props.potlucks[0].isHost}
          />
        </ModalBody>
        <ModalFooter>
          <Button className="bg-cancel" onClick={eventToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default connect(mapStateToProps, {})(UserProfile);
