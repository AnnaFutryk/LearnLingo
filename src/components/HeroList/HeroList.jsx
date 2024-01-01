import { Discr, Item, List, Quantity } from "./HeroList.styled";

const HeroList = () => {
  return (
    <List>
      <Item>
        <Quantity>32,000 +</Quantity>
        <Discr>Experienced tutors</Discr>
      </Item>
      <Item>
        <Quantity>300,000 +</Quantity>
        <Discr>5-star tutor reviews</Discr>
      </Item>
      <Item>
        <Quantity>120 +</Quantity>
        <Discr>Subjects taught</Discr>
      </Item>
      <Item>
        <Quantity>200 +</Quantity>
        <Discr>Tutor nationalities</Discr>
      </Item>
    </List>
  );
};

export default HeroList;
