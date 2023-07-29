import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/Larape84",
      logo: logoGithub,
    },
    {
      name: "Linkedind",
      link: "https://www.linkedin.com/in/leonardo-jose-arape-chirinos-85447a1a2/",
      logo: logoLinkeind,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/",
      logo: logoYoutube,
    },
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>👋🏼 Hello, i'm</p>
            <p>Leonardo Arape</p>
            <p>Front End Developer</p>
          </S.Title>
          <S.DescriptionText>
            Soy estudiante de Ingeniería de Sistemas, busco oportunidad para
            adquirir experiencia en desarrollo de software y diseño de paginas
            web. Me agrada trabajar en equipo, cooperando con todos y ayudando
            de la mejor manera posible, con gran satisfacción en enseñar y
            aprender.
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src="/img/Logo.png" alt="Leonardo Arape" />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};
export default AboutMe;
