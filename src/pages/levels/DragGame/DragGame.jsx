import { useState, useEffect } from "react";
import "./completar.css";
import "bootstrap";
import { Col, Row } from "reactstrap";
import { cerditoSM, cerditoM, cerditoXL } from "./images";
import { Button } from "reactstrap";
import { SuccessModal } from "../../../components";
import { playSound } from "../../../hooks";
import { correctsound } from "../../../assets/sounds";
const DragGame = (props) => {
  // eslint-disable-next-line react/prop-types
  const { redirect } = props;
  const [draggedWord, setDraggedWord] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        playSound(correctsound);
      }, 1000);
    }
  }, [success]);

  function dragStart(e) {
    setDraggedWord(e.target);
    setTimeout(() => (e.target.style.display = "none"), 0);
  }

  function dragEnd(e) {
    setDraggedWord(null);
    setTimeout(() => (e.target.style.display = "block"), 0);
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("hovered");
  }

  function dragLeave(e) {
    e.target.classList.remove("hovered");
  }

  function drop(e) {
    e.target.classList.remove("hovered");
    e.target.appendChild(draggedWord);
  }

  function checkWordsPlacement() {
    let correct = true;
    const dropzones = document.querySelectorAll(".dropzone");

    dropzones.forEach((dropzone, index) => {
      const word = dropzone.querySelector(".word");
      if (!word || word.id !== `word${index + 1}`) {
        correct = false;
      }
    });

    if (correct) {
      alert("¡Felicidades! Has completado la frase correctamente.");
    } else {
      alert("Algo está mal. Por favor, revisa la colocación de las palabras.");
    }
  }

  return !success ? (
    <>
      <div className="container mt-5">
        <div className="imageContainer d-flex justify-content-center align-items-center m-3 ">
          <Row>
            <Col draggable="true" onDragStart={dragStart} onDragEnd={dragEnd}>
              <img
                src={cerditoSM}
                alt="cerditoP"
                id="word1"
                className="word mt-5"
              />
            </Col>
            <Col draggable="true" onDragStart={dragStart} onDragEnd={dragEnd}>
              <img
                src={cerditoM}
                alt="cerditoM"
                id="word2"
                className="word mt-5"
              />
            </Col>
            <Col
              draggable="true"
              onDragStart={dragStart}
              onDragEnd={dragEnd}
              className="mt-2"
            >
              <img
                src={cerditoXL}
                alt="cerditoXL"
                id="word3"
                className="word marginNone mt-5 "
              />
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <Row>
            <Col
              id="dropzone1"
              className="dropzone d-flex justify-content-center align-items-center "
              onDragOver={dragOver}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
              onDrop={drop}
            ></Col>
            <Col
              id="dropzone2"
              className="dropzone d-flex justify-content-center align-items-center"
              onDragOver={dragOver}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
              onDrop={drop}
            ></Col>
            <Col
              id="dropzone3"
              className="dropzone d-flex justify-content-center align-items-center"
              onDragOver={dragOver}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
              onDrop={drop}
            ></Col>
          </Row>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Button
            color="success"
            id="checkButton"
            onClick={() => {
              checkWordsPlacement;
              setSuccess(true);
            }}
          >
            Comprobar
          </Button>
        </div>
      </div>
    </>
  ) : (
    <SuccessModal redirect={redirect} />
  );
};

export default DragGame;
