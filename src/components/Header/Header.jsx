import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Navbar, NavbarBrand } from "reactstrap";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGamepad } from "@fortawesome/free-solid-svg-icons";
import ButtonDropdown from "../ButtonDropdown/ButtonDropdown";
const Header = (args) => {
  return (
    <div>
      <Navbar {...args} className="navbar bg-light fixed-top">
        <NavbarBrand href="/" className="text-dark">
          <FontAwesomeIcon icon={faBook} />
        </NavbarBrand>
        <div className="d-flex">
          <NavbarBrand href="/levels" className="">
            <FontAwesomeIcon icon={faGamepad} />
          </NavbarBrand>
          <ButtonDropdown />
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
