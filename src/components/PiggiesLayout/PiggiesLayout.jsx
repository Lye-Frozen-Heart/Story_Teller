import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";
import { Card, CardTitle, Row, Col, CardBody } from "reactstrap";

const PiggiesLayout = () => {
  return (
    <>
      <Row style={{ display: "flex", justifyContent: "center", padding: "2%" }}>
        <Col>
          <Card style={{ width: "96vw", backgroundColor: "red" }}>
            <CardBody
              style={{ display: "flex", justifyContent: "center" }}
              className="layout-piggies"
            >
              <ReactPlayer
                controls={true}
                light={true}
                url={"https://www.dailymotion.com/video/x8lui04"}
              ></ReactPlayer>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default PiggiesLayout;
