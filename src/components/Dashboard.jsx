//Main Hub for PrivateRoute of App
//Will contain its own DashBoardNavBar
//Will display userData and eventData
//Will contain the Organizer's Events
//Will contain the Guest's Food Obligations
//Will contain and/or display a countdown for upcoming events ***Stretch***

import React from "react";
import EventList from "./EventList";
import EventPage from "./EventPage";
import CreateEvent from "./forms/CreateEvent";
import EditEvent from "./forms/EditEvent";
import UserProfile from "./UserProfile";
import EventInvitation from "./EventInvitation";
import EditUser from "./forms/EditUser";

export default function DashBoard() {
  return (
    <>
      <EventList />
      <EventPage />
      <CreateEvent />
      <EditEvent />
      <UserProfile />
      <EventInvitation />
      <EditUser />
    </>
  );
}
