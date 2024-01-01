import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/auth/auth-selectors";
import { Link, List } from "./Navigation.styled";

const Navigation = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <List>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/teachers">Teachers</Link>
      </li>
      {isAuth && (
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      )}
    </List>
  );
};

export default Navigation;
