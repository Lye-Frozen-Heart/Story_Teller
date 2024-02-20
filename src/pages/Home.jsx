import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header/Header";
import ReactPlayer from "react-player";
import { Card, CardTitle, Row, Col, CardBody } from "reactstrap";
import ReactCanvasPaint from "react-canvas-paint";
import "react-canvas-paint/dist/index.css";

function Home() {
  return (
    <>
      <Header></Header>
      <Row style={{ display: "flex", justifyContent: "center", padding: "2%" }}>
        <Col>
          <ReactCanvasPaint
            colors={[
              "#7030A2",
              "#000000",
              "#0170C1",
              "#FE0002",
              "#FFFF01",
              "#FFFFFF",
            ]}
          />
        </Col>
      </Row>
    </>
  );
}

export default Home;
