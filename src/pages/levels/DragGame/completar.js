document.addEventListener("DOMContentLoaded", function () {
  const words = document.querySelectorAll(".word");
  const dropzones = document.querySelectorAll(".dropzone");
  const checkButton = document.getElementById("checkButton");

  let draggedWord = null;

  words.forEach((word) => {
    word.addEventListener("dragstart", dragStart);
    word.addEventListener("dragend", dragEnd);
  });

  dropzones.forEach((dropzone) => {
    dropzone.addEventListener("dragover", dragOver);
    dropzone.addEventListener("dragenter", dragEnter);
    dropzone.addEventListener("dragleave", dragLeave);
    dropzone.addEventListener("drop", drop);
  });

  checkButton.addEventListener("click", checkWordsPlacement);

  function dragStart() {
    draggedWord = this;
    setTimeout(() => (this.style.display = "none"), 0);
  }

  function dragEnd() {
    draggedWord = null;
    setTimeout(() => (this.style.display = "block"), 0);
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add("hovered");
  }

  function dragLeave() {
    this.classList.remove("hovered");
  }

  function drop() {
    this.classList.remove("hovered");
    this.appendChild(draggedWord);
  }

  function checkWordsPlacement() {
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
});
