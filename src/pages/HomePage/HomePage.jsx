import Hero from "../../components/Hero/Hero";
import HeroList from "../../components/HeroList/HeroList";
import { Container } from "./HomePage.styled";

const HomePage = () => {
  return (
    <Container>
      <Hero />
      <HeroList />
    </Container>
  );
};

export default HomePage;
