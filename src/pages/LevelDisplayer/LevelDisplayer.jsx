import { Card, CardBody, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LevelDisplayer.css";
import {
  /* gamepad,
  
  fruta,
  caligrafia,*/
  brush,
  pigic,
  wolf,
  village,
  /*puzzle,
  
  
  wood,
  height,
  math,
  cubiertos,*/
  cubes,
  hawk,
  tick,
  notmark,
  /*granja,
  blow,*/
} from "../../assets";
import { Footer } from "../../components";
import { useState } from "react";

const LevelDisplayer = () => {
  const [markedArray, setMarkedArray] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleMarkedArray = (position) => {
    setMarkedArray((prevMarkedArray) => {
      const updatedMarkedArray = [...prevMarkedArray];
      updatedMarkedArray[position] = !prevMarkedArray[position];
      return updatedMarkedArray;
    });
  };
  return (
    <>
      <div className="justify-content-center align-items-center displayer-container">
        <Row>
          <Col>
            <Card>
              <CardBody className="d-flex justify-content-center align-items-center">
                <a
                  href="/animal_p"
                  className="d-flex justify-content-center align-items-center"
                >
                  <img src={pigic} alt="sound" style={{ width: "50%" }} />
                </a>
              </CardBody>
              {markedArray[0] == true ? (
                <a onClick={() => handleMarkedArray(0)}>
                  <img src={tick} alt="done-tick" className="done-tick" />
                </a>
              ) : (
                <a onClick={() => handleMarkedArray(0)}>
                  <img src={notmark} alt="not-tick" className="done-tick" />
                </a>
              )}
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody className="d-flex justify-content-center align-items-center">
                <a
                  href="/animal_w"
                  className="d-flex justify-content-center align-items-center"
                >
                  <img src={wolf} alt="sound" style={{ width: "50%" }} />
                </a>
              </CardBody>
              {markedArray[1] == true ? (
                <a onClick={() => handleMarkedArray(1)}>
                  <img src={tick} alt="done-tick" className="done-tick" />
                </a>
              ) : (
                <a onClick={() => handleMarkedArray(1)}>
                  <img src={notmark} alt="not-tick" className="done-tick" />
                </a>
              )}
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody className="d-flex justify-content-center align-items-center">
                <a
                  href="/animal_h"
                  className="d-flex justify-content-center align-items-center"
                >
                  <img src={hawk} alt="sound" style={{ width: "50%" }} />
                </a>
              </CardBody>
              {markedArray[2] == true ? (
                <a onClick={() => handleMarkedArray(2)}>
                  <img src={tick} alt="done-tick" className="done-tick" />
                </a>
              ) : (
                <a onClick={() => handleMarkedArray(2)}>
                  <img src={notmark} alt="not-tick" className="done-tick" />
                </a>
              )}
            </Card>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Card>
              <CardBody className="d-flex justify-content-center align-items-center">
                <a
                  href="/memory"
                  className="d-flex justify-content-center align-items-center"
                >
                  <img src={cubes} alt="cubes" style={{ width: "50%" }} />
                </a>
              </CardBody>
              {markedArray[3] == true ? (
                <a onClick={() => handleMarkedArray(3)}>
                  <img src={tick} alt="done-tick" className="done-tick" />
                </a>
              ) : (
                <a onClick={() => handleMarkedArray(3)}>
                  <img src={notmark} alt="not-tick" className="done-tick" />
                </a>
              )}
            </Card>
          </Col>

          <Col>
            <Card>
              <CardBody className="d-flex justify-content-center align-items-center">
                <a
                  href="/paint"
                  className="d-flex justify-content-center align-items-center"
                >
                  <img src={brush} alt="brush" style={{ width: "50%" }} />
                </a>
              </CardBody>
              {markedArray[4] == true ? (
                <a onClick={() => handleMarkedArray(4)}>
                  <img src={tick} alt="done-tick" className="done-tick" />
                </a>
              ) : (
                <a onClick={() => handleMarkedArray(4)}>
                  <img src={notmark} alt="not-tick" className="done-tick" />
                </a>
              )}
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody className="d-flex justify-content-center align-items-center">
                <a
                  href="/draggame"
                  className="d-flex justify-content-center align-items-center"
                >
                  <img src={village} alt="village" style={{ width: "40%" }} />
                </a>
              </CardBody>
              {markedArray[5] == true ? (
                <a onClick={() => handleMarkedArray(5)}>
                  <img src={tick} alt="done-tick" className="done-tick" />
                </a>
              ) : (
                <a onClick={() => handleMarkedArray(5)}>
                  <img src={notmark} alt="not-tick" className="done-tick" />
                </a>
              )}
            </Card>
          </Col>
        </Row>
        {/*<Row>
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href=""
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={fruta}
                  alt="fruta"
                  style={{ width: "50%", height: "100%" }}
                />
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href=""
                className="d-flex justify-content-center align-items-center"
              >
                <img src={gamepad} alt="gamepad" style={{ width: "50%" }} />
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href="/animal_one"
                className="d-flex justify-content-center align-items-center"
              >
                <img src={sound} alt="sound" style={{ width: "50%" }} />
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href=""
                className="d-flex justify-content-center align-items-center"
              >
                <img src={brush} alt="brush" style={{ width: "50%" }} />
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href=""
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={caligrafia}
                  alt="caligrafia"
                  style={{ width: "51%" }}
                />
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href=""
                className="d-flex justify-content-center align-items-center"
              >
                <img src={puzzle} alt="puzzle" style={{ width: "50%" }} />
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href=""
                className="d-flex justify-content-center align-items-center"
              >
                <img src={pigic} alt="pigic" style={{ width: "50%" }} />
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href=""
                className="d-flex justify-content-center align-items-center"
              >
                <img src={wolf} alt="wolf" style={{ width: "50%" }} />
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
       
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href=""
                className="d-flex justify-content-center align-items-center"
              >
                <img src={wood} alt="wood" style={{ width: "50%" }} />
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href=""
                className="d-flex justify-content-center align-items-center"
              >
                <img src={height} alt="height" style={{ width: "50%" }} />
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href="/memory"
                className="d-flex justify-content-center align-items-center"
              >
                <img src={cubes} alt="cubes" style={{ width: "50%" }} />
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href=""
                className="d-flex justify-content-center align-items-center"
              >
                <img src={math} alt="math" style={{ width: "50%" }} />
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href=""
                className="d-flex justify-content-center align-items-center"
              >
                <img src={cubiertos} alt="cubiertos" style={{ width: "50%" }} />
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href=""
                className="d-flex justify-content-center align-items-center"
              >
                <img src={granja} alt="granja" style={{ width: "50%" }} />
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody className="d-flex justify-content-center align-items-center">
              <a
                href=""
                className="d-flex justify-content-center align-items-center"
              >
                <img src={blow} alt="blow" style={{ width: "50%" }} />
              </a>
            </CardBody>
          </Card>
        </Col>
  </Row>*/}
      </div>
      <Footer />
    </>
  );
};

export default LevelDisplayer;
