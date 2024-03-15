import { useEffect, useState } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { catalonia, morroco, spain } from "../assets";
import { Footer } from "../components";
import ReactPlayer from "react-player";

function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("spain");
  const [url, setUrl] = useState(
    "https://www.dailymotion.com/video/k7GBIZq3QTexSXA6WhI"
  );
  const [playing, setPlaying] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleUrlChange = (url) => {
    setSelectedLanguage(url);
  };

  useEffect(() => {
    if (selectedLanguage === "spain")
      setUrl("https://www.dailymotion.com/video/k7GBIZq3QTexSXA6WhI");
    if (selectedLanguage === "catalan")
      setUrl("https://www.dailymotion.com/video/k4V3SA9C53cmoxA6WhE");
    if (selectedLanguage === "morroco")
      setUrl("https://www.dailymotion.com/video/kCAmnkBNr5wbHjA6WqC");
    setPlaying(true);
  }, [selectedLanguage, url]);

  return (
    <div className="justify-content-center align-items-center displayer-container">
      <Row>
        <Col className="d-flex justify-content-center">
          <Card className="w-50 mt-3">
            <CardHeader className="d-flex justify-content-end">
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle>
                  <FontAwesomeIcon icon={faLanguage} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => handleUrlChange("spain")}>
                    <p>
                      <img src={spain} alt="spain" /> Castellano
                    </p>
                  </DropdownItem>
                  <DropdownItem onClick={() => handleUrlChange("catalan")}>
                    <p>
                      <img src={catalonia} alt="catalonia" /> Català
                    </p>
                  </DropdownItem>
                  <DropdownItem onClick={() => handleUrlChange("morroco")}>
                    <p>
                      <img src={morroco} alt="morroco" /> عرب
                    </p>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardHeader>
            <CardBody className="d-flex justify-content-center align-items-center">
              <ReactPlayer controls={true} url={url} playing={playing} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Home;
