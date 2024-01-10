import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/auth/auth-selectors";
import { useColor } from "../Hero/ColorContext";
import { Link, List } from "./Navigation.styled";

const Navigation = () => {
  const isAuth = useSelector(selectIsAuth);
  const { currentColor } = useColor();

  return (
    <List>
      <li>
        <Link to="/" style={{ color: currentColor }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/teachers" style={{ color: currentColor }}>
          Teachers
        </Link>
      </li>
      {isAuth && (
        <li>
          <Link to="/favorites" style={{ color: currentColor }}>
            Favorites
          </Link>
        </li>
      )}
    </List>
  );
};

export default Navigation;
