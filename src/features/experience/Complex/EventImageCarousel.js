import { EVENTS } from "../../../app/shared/experienceEvents";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "reactstrap";
import React from "react";

export const EventImageCarousel = ({ photos }) => {
  return <img src={photos[0]} />;
};
