import React from "react";
import { Col, Row } from "react-materialize";
import RestrauntListPage from "./pages/RestrauntListPage";

export default class App extends React.Component {
  render() {
    return (
      <Row>
        <Col s={12} m={10} l={8} offset="m1 l2">
          <RestrauntListPage />
        </Col>
      </Row>
    );
  }
}
