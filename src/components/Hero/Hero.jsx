import { useNavigate } from "react-router-dom";
import MainBtn from "../Buttons/MainBtn/MainBtn";
import {
  HeroWrapper,
  ImgBlock,
  Span,
  Title,
  Txt,
  TxtBlock,
} from "./Hero.styled";
import { useEffect, useState } from "react";
import { heroImg } from "./heroImg";

const Hero = () => {
  const [currentImg, setCurrentImg] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const imgKeys = Object.keys(heroImg);
    const randomIndex = Math.floor(Math.random() * imgKeys.length);
    const randomColor = imgKeys[randomIndex];
    setCurrentImg(heroImg[randomIndex]);
    switch (randomColor) {
      case "0":
        setCurrentColor("#F4C550");
        break;
      case "1":
        setCurrentColor("#9FB7CE");
        break;
      case "2":
        setCurrentColor("#9FBAAE");
        break;
      case "3":
        setCurrentColor("#E0A39A");
        break;
      case "4":
        setCurrentColor("#F0AA8D");
        break;

      default:
        break;
    }
  }, []);

  return (
    <HeroWrapper>
      <TxtBlock>
        <Title>
          Unlock your potential with the best{" "}
          <Span color={currentColor}>language</Span> tutors
        </Title>
        <Txt>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </Txt>
        <MainBtn
          color={currentColor}
          type={"button"}
          text={"Get started"}
          width={"267px"}
          onClick={() => navigate("/teachers")}
        />
      </TxtBlock>
      <ImgBlock>
        <img src={currentImg} alt="hero" width="568" height="530" />
      </ImgBlock>
    </HeroWrapper>
  );
};

export default Hero;
