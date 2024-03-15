import { useState, useEffect } from "react";
import "./MemoryGame.css";
import { cover, A, B, C, D, E, F, G, H } from "../../../assets";
import { Col, Container, Row } from "reactstrap";
import { SuccessModal } from "../../../components";
import { playSound } from "../../../hooks";
import { correctsound, pop } from "../../../assets/sounds";

const MemoryGame = (props) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [success, setSuccess] = useState(false);
  // eslint-disable-next-line react/prop-types
  const {redirect} = props;

  useEffect(() => {
    const symbols = [A, B, C, D, E, F, G, H];
    const initialCards = symbols
      .concat(symbols)
      .sort(() => Math.random() - 0.5);
    setCards(initialCards);
  }, []);

  useEffect(() => {
    if (flipped.length === 2) {
      const [firstCard, secondCard] = flipped;
      if (cards[firstCard] === cards[secondCard]) {
        setSolved([...solved, firstCard, secondCard]);
        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 1000);
      }
    }
    if(solved.length === 16){
      setTimeout(()=>{
        setSuccess(true);
        playSound(correctsound);
      },2000)
    } 
  }, [flipped, cards, solved]);

  const handleCardClick = (index) => {
    if (
      flipped.length < 2 &&
      !flipped.includes(index) &&
      !solved.includes(index)
    ) {
      setFlipped([...flipped, index]);
    }
  };

  const renderCards = () => {
    const rows = [];
    for (let i = 0; i < cards.length; i += 4) {
      const row = (
        <Row key={i} xs="4">
          {cards.slice(i, i + 4).map((_, index) => (
            <Col
              className={`card-memory ${
                flipped.includes(i + index) || solved.includes(i + index)
                  ? "flipped"
                  : ""
              }`}
              key={i + index}
              onClick={() =>{ 
                handleCardClick(i + index);
                playSound(pop);
              }}
            >
              {flipped.includes(i + index) || solved.includes(i + index) ? (
                <img
                  src={cards[i + index]}
                  alt={cards[i + index]}
                  className="img-memo"
                />
              ) : (
                <img src={cover} alt="Cover" className="w-50 h-50" />
              )}
            </Col>
          ))}
        </Row>
      );
      rows.push(row);
    }
    return rows;
  };

  return !success ? (
    <div style={{ margin: "7% 5% 0 5%" }}>
      <h1 className="text-center">Encuentra las parejas!</h1>
      <Container className="d-flex justify-content-center align-items-center mt-5 flex-column">
        {renderCards()}
      </Container>
    </div>
  ):<SuccessModal redirect={redirect}/>;
};

export default MemoryGame;
