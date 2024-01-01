import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LogInSvg } from "../../../images/log-in.svg";
import { ReactComponent as LogOutSvg } from "../../../images/log-out.svg";
import { logOut } from "../../../redux/auth/auth-operations";
import { selectIsAuth } from "../../../redux/auth/auth-selectors";
import { LogInTxt, Wrapp } from "./LogIn.styled";

const LogIn = ({ onClick }) => {
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      {isAuth ? (
        <Wrapp onClick={handleLogOut}>
          <LogOutSvg />
          <LogInTxt>Log out</LogInTxt>
        </Wrapp>
      ) : (
        <Wrapp onClick={onClick}>
          <LogInSvg />
          <LogInTxt>Log in</LogInTxt>
        </Wrapp>
      )}
    </>
  );
};

export default LogIn;
