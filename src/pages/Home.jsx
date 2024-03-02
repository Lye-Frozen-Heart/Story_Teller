import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";
import React, { useEffect } from "react";
import useLanguage from "../components/ButtonDropdown/useState";
//import ReactCanvasPaint from "react-canvas-paint";
import "react-canvas-paint/dist/index.css";
import { Card, CardBody, Col, Row } from "reactstrap";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import ButtonDropdown from "../components/ButtonDropdown/ButtonDropdown";

function Home() {
  const { changeLanguage, videoUrl,language } = useLanguage();

  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };
  useEffect(() => {
    console.log(videoUrl);
  }, []);

  useEffect(() => {
    console.log(videoUrl);
  }, [videoUrl]);
  return (
    <div className="justify-content-center align-items-center displayer-container">
      <Row>
        <Col className="d-flex justify-content-center">
          <Card className="w-50">
            <CardBody className="d-flex justify-content-center align-items-center">
              <ReactPlayer controls={true} url={videoUrl} />
              <ButtonDropdown onLanguageChange={handleLanguageChange} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
