import React, { useState } from "react";
import "./DragPig.css";

function DragPigs() {
  const [draggedWord, setDraggedWord] = useState(null);

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
    const dropzones = document.querySelectorAll(".dropzone");
    let correct = true;
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

  return (
    <div className="container">
      <div className="row col-12">
        <div className="col-4">
          <img
            id="word1"
            className="word col-4"
            draggable="true"
            src="./images/cerditoS2-removebg-preview (1).png"
            onDragStart={dragStart}
            onDragEnd={dragEnd}
          />
        </div>
        <div className="col-4">
          <img
            id="word2"
            className="word col-4"
            draggable="true"
            src="./images/cerditoM2-removebg-preview (1).png"
            onDragStart={dragStart}
            onDragEnd={dragEnd}
          />
        </div>
        <div className="col-4">
          <img
            id="word3"
            className="word col-4"
            draggable="true"
            src="./images/cerditoL2-removebg-preview (1).png"
            onDragStart={dragStart}
            onDragEnd={dragEnd}
          />
        </div>
      </div>
      <div className="row col-12">
        <div
          id="dropzone1"
          className="dropzone col-4"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={drop}
        ></div>
        <div
          id="dropzone2"
          className="dropzone col-4"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={drop}
        ></div>
        <div
          id="dropzone3"
          className="dropzone col-4"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={drop}
        ></div>
      </div>
      <button
        id="checkButton"
        className="btn btn-primary"
        onClick={checkWordsPlacement}
      >
        Comprobar
      </button>
    </div>
  );
}

export default DragPigs;
