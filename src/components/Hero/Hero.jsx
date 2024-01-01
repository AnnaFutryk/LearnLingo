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
import OrangeHeroImage from "../../images/hero/orange-hero.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <HeroWrapper>
      <TxtBlock>
        <Title>
          Unlock your potential with the best <Span>language</Span> tutors
        </Title>
        <Txt>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </Txt>
        <MainBtn
          type={"button"}
          text={"Get started"}
          width={"267px"}
          onClick={() => navigate("/teachers")}
        />
      </TxtBlock>
      <ImgBlock>
        <img src={OrangeHeroImage} alt="hero" width="568" height="530" />
      </ImgBlock>
    </HeroWrapper>
  );
};

export default Hero;
