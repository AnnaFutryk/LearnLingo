import { useSelector } from "react-redux";
import TeacherItem from "../../components/TeacherItem/TacherItem";
import { getFavorites } from "../../redux/favorites/favorites-selector";
import { Container, List } from "./FavoritePage.styled";

const FavoritePage = () => {
  const favoriteTeachers = useSelector(getFavorites);
  return (
    <Container>
      <List>
        {favoriteTeachers?.length !== 0 ? (
          favoriteTeachers.map((item, index) => (
            <TeacherItem key={index} item={item} />
          ))
        ) : (
          <p>No teachers found matching your criteria</p>
        )}
      </List>
    </Container>
  );
};

export default FavoritePage;
