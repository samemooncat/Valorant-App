import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../styles/MenuStyled";

const links = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Mapas",
    href: "/mapas",
  },
];

const RoutesMenu = () => {
  return (
    <Header>
      {links.map((link) => (
        <Link to={link.href}>{link.name}</Link>
      ))}
    </Header>
  );
};

export default RoutesMenu;
