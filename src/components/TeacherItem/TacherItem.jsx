import {
  Avatar,
  AvatarWrapper,
  FirstLineWrapp,
  GreenSvg,
  Name,
  TeacherCard,
  Title,
} from "./TeacherItem.styled";

const TeacherItem = ({ item }) => {
  const {
    avatar_url,
    name,
    surname,
    languages,
    lesson_info,
    conditions,
    lessons_done,
    rating,
    price_per_hour,
    experience,
    reviews,
    levels,
  } = item;

  return (
    <TeacherCard>
      <AvatarWrapper>
        <GreenSvg />
        <Avatar src={avatar_url} alt="avatar" />
      </AvatarWrapper>
      <FirstLineWrapp>
        <div>
          <Title>Languages</Title>
          <Name>{name}</Name>
        </div>
      </FirstLineWrapp>
    </TeacherCard>
  );
};

export default TeacherItem;
