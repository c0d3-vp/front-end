import React from "react";
import { Button, Card, CardBody, CardText, CardFooter } from "reactstrap";

export default function Food(props) {
  const { foodname, description } = props;
  return (
    <Card>
      <CardBody>
        <CardText>{foodname}</CardText>
        <CardText>{description}</CardText>
        <CardFooter>
          <Button className=".bg-cancel">Remove</Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
}