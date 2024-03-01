import { Row, Col } from "reactstrap";
import "./SuccessModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SuccessModal = (props) => {
  const { redirect } = props;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center success-modal">
      <Row>
        <Col>
          <a
            href={redirect}
            className="d-flex justify-content-center text-center font-cool"
          >
            Has ganado!
            <i className="icon-arrow">
              <FontAwesomeIcon icon={faArrowRight} className="m-2" />
            </i>
          </a>
        </Col>
      </Row>
    </div>
  );
};
export default SuccessModal;
