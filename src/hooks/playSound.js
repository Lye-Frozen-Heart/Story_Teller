const playSound = (data) => {
    let audio = new Audio(data);
    audio.play();
  };
export default playSound;