import "bootstrap/dist/css/bootstrap.min.css";
//import ReactPlayer from "react-player";
//import ReactCanvasPaint from "react-canvas-paint";
import "react-canvas-paint/dist/index.css";
import ReactPlayer from "react-player";
import { Card, CardBody, Col, Row } from "reactstrap";

function Home() {
  return (
    <div className="justify-content-center align-items-center displayer-container">
      <Row>
        <Col className="d-flex justify-content-center">
          <Card className="w-50">
            <CardBody className="d-flex justify-content-center align-items-center">
              <ReactPlayer
                controls={true}
                url={"https://www.dailymotion.com/video/k7GBIZq3QTexSXA6WhI"}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
