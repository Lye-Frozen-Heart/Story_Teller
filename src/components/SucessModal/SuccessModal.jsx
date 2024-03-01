import { Button } from "reactstrap";
import "./SuccessModal.css";
import { useNavigate } from "react-router-dom";

const SuccessModal = (props) =>{
const {redirect} = props;
let navigate = useNavigate();
 const handleNavigate = (redirect) =>{
    navigate(redirect);
  }
 return <div className="d-flex justify-content-center align-items-center success-modal">
    <h1 className="text-center font-cool">
        Has ganado!
    </h1>
    <Button onClick={handleNavigate(redirect)}>
        Siguiente Juego!
    </Button>
</div>};
export default SuccessModal;