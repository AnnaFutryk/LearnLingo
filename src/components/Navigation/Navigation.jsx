import { Link, List } from "./Navigation.styled";

const Navigation = () => {
  return (
    <List>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/teachers">Teachers</Link>
      </li>
      <li>
        <Link to="/favorites">Favorites</Link>
      </li>
    </List>
  );
};

export default Navigation;
