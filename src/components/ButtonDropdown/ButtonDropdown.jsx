import React from "react";
import useLanguage from "./useState";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const ButtonDropdown = () => {
  const { changeLanguage } = useLanguage();

  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>Idiomas</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => changeLanguage("cat")}>
          Català
        </DropdownItem>
        <DropdownItem onClick={() => changeLanguage("es")}>
          Castellano
        </DropdownItem>
        <DropdownItem onClick={() => changeLanguage("arab")}>
          العربية
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default ButtonDropdown;
