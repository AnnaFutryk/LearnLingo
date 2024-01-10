import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/auth/auth-operations";
import { selectIsAuth } from "../../../redux/auth/auth-selectors";
import { useColor } from "../../Hero/ColorContext";
import { LogInTxt, SvgLogIn, SvgLogOut, Wrapp } from "./LogIn.styled";

const LogIn = ({ onClick }) => {
  const isAuth = useSelector(selectIsAuth);
  const { currentColor } = useColor();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      {isAuth ? (
        <Wrapp onClick={handleLogOut}>
          <SvgLogOut style={{ fill: currentColor, stroke: currentColor }} />
          <LogInTxt>Log out</LogInTxt>
        </Wrapp>
      ) : (
        <Wrapp onClick={onClick}>
          <SvgLogIn style={{ fill: currentColor, stroke: currentColor }} />
          <LogInTxt>Log in</LogInTxt>
        </Wrapp>
      )}
    </>
  );
};

export default LogIn;
