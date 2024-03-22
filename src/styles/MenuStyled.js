import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: #2c3136;
  font-weight: 700;
  font-style: normal;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 10%;
  margin-left: 50px;
`;

export const List = styled.ul`
  width: fit-content;
  position: relative;
  left: 50px;
`;

export const ListItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 25px;
  text-shadow: 1px 1px 2px black;
  &:hover {
    color: #d1363a;
    transition: 0.2s;
  }
`;
