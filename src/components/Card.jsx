import React from "react";
import { useFetch } from "../useFetch";
import {
  Home,
  Title,
  CarouselContainer,
  CardContainer,
  Image,
  TextAgent,
  TypeAgent,
  AgentAbilities,
  IconAbilities,
} from "../styles/CardStyled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Card = () => {
  const { data, loading, error } = useFetch(
    "https://valorant-api.com/v1/agents"
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Home>
      <Title>AGENTS</Title>
      <CarouselContainer>
        <Slider {...settings}>
          {data?.map((agent) => (
            <CardContainer key={agent.uuid}>
              <TypeAgent>{agent.developerName}</TypeAgent>
              <Image src={agent.fullPortrait}></Image>
              <TextAgent>{agent.displayName}</TextAgent>
              <AgentAbilities>
                {agent.abilities.map((abilitie) => (
                  <IconAbilities
                    key={abilitie.slot}
                    src={abilitie.displayIcon}
                  ></IconAbilities>
                ))}
              </AgentAbilities>
            </CardContainer>
          ))}
        </Slider>
      </CarouselContainer>
    </Home>
  );
};

export default Card;
