import "bootstrap/dist/css/bootstrap.min.css";
//import ReactPlayer from "react-player";
//import ReactCanvasPaint from "react-canvas-paint";
import ReactPlayer from "react-player";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import { Footer } from "../components";
import { useState } from "react";
import { catalonia, morroco, spain } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState(
    "https://www.dailymotion.com/video/k7GBIZq3QTexSXA6WhI"
  );
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className="justify-content-center align-items-center displayer-container">
      <Row>
        <Col className="d-flex justify-content-center">
          <Card className="w-50">
            <CardHeader className="d-flex justify-content-end">
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle>
                  <FontAwesomeIcon icon={faLanguage} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() =>
                      setSelectedUrl(
                        "https://www.dailymotion.com/video/k5NIvZ0I8EpGBvA6WhI"
                      )
                    }
                  >
                    <p>
                      <img src={spain} alt="spain" /> Castellano
                    </p>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() =>
                      setSelectedUrl(
                        "https://www.dailymotion.com/video/k4V3SA9C53cmoxA6WhE"
                      )
                    }
                  >
                    <p>
                      <img src={catalonia} alt="catalonia" /> Català
                    </p>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() =>
                      setSelectedUrl(
                        "https://www.dailymotion.com/video/kCAmnkBNr5wbHjA6WqC"
                      )
                    }
                  >
                    <p>
                      <img src={morroco} alt="morroco" /> عرب
                    </p>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardHeader>
            <CardBody className="d-flex justify-content-center align-items-center">
              <ReactPlayer controls={true} url={selectedUrl} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Home;
