import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Nav } from "./styled";

export default function Catalog({ children }) {
  return (
    <Wrapper>
      <Nav>
        <Link to="/">Каталог</Link>
      </Nav>
      <main>{children}</main>
    </Wrapper>
  );
}
