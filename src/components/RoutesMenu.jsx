import React from "react";
import { Header, Image, List, ListItem } from "../styles/MenuStyled";
import Logo from "../assets/logo.png";

const links = [
  {
    id: 1,
    name: "INICIO",
    href: "/",
  },
  {
    id: 2,
    name: "MAPAS",
    href: "/mapas",
  },
];

const RoutesMenu = () => {
  return (
    <Header>
      <Image src={Logo}></Image>
      <List>
        {links.map((link) => (
          <ListItem key={link.id} to={link.href}>
            {link.name}
          </ListItem>
        ))}
      </List>
    </Header>
  );
};

export default RoutesMenu;
