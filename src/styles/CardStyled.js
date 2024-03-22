import styled from "styled-components";
import background from "../assets/background-home.jpg";

export const Home = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${background});
  box-shadow: inset 0 0 0 2000px rgba(209, 90, 86, 0.7);
`;

export const Title = styled.h1`
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px white;
    font-size: 60px;
    margin: 35px;
    
`;

export const CarouselContainer = styled.div`
  width: 95%;
  height: 600px;
  display: block ;
  margin: 0 auto ;
`;

export const CardContainer = styled.div`
  width: 300px;
  height: 500px;
  background-color: #272727;
  border: 1px solid #e1e1e1;
  border-radius: 15px;
  position: relative;
`;

export const Image = styled.img`
  width: 460px;
  position: relative;
  right: 58px;
`;

export const TextAgent = styled.p`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px white;
  writing-mode: vertical-rl;
  font-size: 55px;
  position: absolute;
  top: 30px;
  left: -36px;
  text-transform: uppercase;
`;

export const TypeAgent = styled.p`
  color: #d1363a;
  font-size: 15px;
  position: absolute;
  top: 5px;
  left: 5px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const AgentAbilities = styled.div`
  width: 250px;
  height: 65px;
  background-color: #272727;
  border: 1px solid #e1e1e1;
  border-radius: 15px;
  position: relative;
  top:50px ;
  left:100px ;
  display:flex;
  justify-content: space-between;
  align-items:center;
`;

export const IconAbilities = styled.img`
  width: 45px;
  height: 45px;
`;
