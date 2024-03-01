import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const ButtonDropdown = (props) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>Idiomas</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Català</DropdownItem>
        <DropdownItem>Castellano</DropdownItem>
        <DropdownItem>العربية</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
export default ButtonDropdown;
