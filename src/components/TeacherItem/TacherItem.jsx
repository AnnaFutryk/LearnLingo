import { ReactComponent as BookSvg } from "../../images/card/book.svg";
import { ReactComponent as StarSvg } from "../../images/card/star.svg";
import { ReactComponent as HeartSvg } from "../../images/card/heart.svg";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Avatar,
  AvatarWrapper,
  FirstLineWrapp,
  GreenSvg,
  HeartBtn,
  InfoItem,
  InfoList,
  Name,
  Span,
  TeacherCard,
  Title,
} from "./TeacherItem.styled";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/favorites/favorites-selector";
import { selectIsAuth } from "../../redux/auth/auth-selectors";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/favorites/favorites-slice";

const TeacherItem = ({ item }) => {
  const dispatch = useDispatch();

  const fetchedFavorites = useSelector(getFavorites);
  const isAuth = useSelector(selectIsAuth);

  const isLiked = fetchedFavorites.some(
    (teacher) => teacher.avatar_url === item.avatar_url
  );

  const handleToggleFavorite = () => {
    if (isAuth && isLiked) {
      dispatch(removeFavorite(item));
      return;
    } else if (isAuth && !isLiked) {
      dispatch(addFavorite(item));
      return;
    }
    toast.error(`Авторизуйтеся, щоб мати можливість додати до обраних`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

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
      <ToastContainer transition={Slide} />
      <AvatarWrapper>
        <GreenSvg />
        <Avatar src={avatar_url} alt="avatar" />
      </AvatarWrapper>
      <FirstLineWrapp>
        <div>
          <Title>Languages</Title>
          <Name>{name}</Name>
        </div>

        <InfoList>
          <InfoItem>
            <BookSvg />
            Lessons online
          </InfoItem>
          <InfoItem>Lessons done: {lessons_done}</InfoItem>
          <InfoItem>
            <StarSvg />
            Rating: {rating}
          </InfoItem>
          <InfoItem>
            Price / 1 hour: <Span>{price_per_hour}$</Span>
          </InfoItem>
          <HeartBtn onClick={handleToggleFavorite}>
            {isLiked ? (
              <HeartSvg fill={"#F4C550"} stroke={"#F4C550"} />
            ) : (
              <HeartSvg stroke={"#121417"} />
            )}
          </HeartBtn>
        </InfoList>
      </FirstLineWrapp>
    </TeacherCard>
  );
};

export default TeacherItem;
