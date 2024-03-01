import {
  Card,
  CardBody,
  Row,
  Col,
  Container,
  CardHeader,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AnimalSounds.css";
import { aguila, cerdo_peque, onewolf, sound } from "../../../assets";
import {
  howl1,
  howl2,
  howl3,
  oink1mp3,
  oink2mp3,
  oink3mp3,
  hawk1,
  hawk2,
  correctsound,
} from "../../../assets/sounds";
import { useEffect, useState } from "react";
import { SuccessModal } from "../../../components";
import { playSound } from "../../../hooks";
const AnimalSounds = (props) => {
  const [success, setSuccess] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { sounds, correctOption, redirect } = props;
  const [doneArray, setDoneArray] = useState([false, false, false, false]);

  const playSoundRandomPig = () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let audio = new Audio(oink1mp3);
    if (randomNumber === 2) audio = new Audio(oink2mp3);
    if (randomNumber === 3) audio = new Audio(oink3mp3);
    audio.play();
  };

  const playSoundWolf = () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let audio = new Audio(howl1);
    if (randomNumber === 2) audio = new Audio(howl2);
    if (randomNumber === 3) audio = new Audio(howl3);
    audio.play();
  };

  const playSoundHawk = () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let audio = new Audio(hawk1);
    if (randomNumber === 2) audio = new Audio(hawk2);
    audio.play();
  };

  useEffect(() => {}, []);

  useEffect(() => {
    if (correctOption !== null) {
      try {
        document.getElementById(correctOption).addEventListener("click", () => {
          setTimeout(() => {
            setSuccess(true);
            playSound(correctsound);
          }, 2000);
        });
      } catch {
        console.log("Err");
      }
    }
  }, [success]);

  return !success ? (
    <>
      <div className="justify-content-center align-items-center displayer-container">
        <Container>
          <Row>
            <Col>
              <Card>
                <CardHeader className="d-flex justify-content-center align-items-center">
                  <h1 className="text-center">¿Qué animal hace este sonido?</h1>
                  <Button color="link" onClick={() => playSound(sounds)}>
                    <img src={sound} alt="sound" style={{ width: "40%" }} />
                  </Button>
                </CardHeader>
                <CardBody className="d-flex justify-content-center align-items-center">
                  <Row>
                    <Col>
                      <Button
                        color="link"
                        className="d-flex justify-content-center align-items-center"
                        onClick={() => {
                          playSoundRandomPig();
                        }}
                        id="pig"
                      >
                        <img
                          className="img-70"
                          src={cerdo_peque}
                          alt="cerdo_peque"
                        />
                      </Button>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                      <Button
                        color="link"
                        onClick={() => {
                          playSoundWolf();
                        }}
                        id="wolf"
                      >
                        <img className="img-80" src={onewolf} alt="onewolf" />
                      </Button>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                      <Button
                        color="link"
                        onClick={() => {
                          playSoundHawk();
                        }}
                        id="hawk"
                      >
                        <img
                          src={aguila}
                          alt="aguila"
                          style={{ width: "50%", height: "100%" }}
                        />
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  ) : (
    <SuccessModal redirect={redirect} />
  );
};

export default AnimalSounds;
