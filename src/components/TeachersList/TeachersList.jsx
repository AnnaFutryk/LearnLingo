import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../../redux/teachers/teachers-operations";
import { selectTeachers } from "../../redux/teachers/teachers-selectors";

const TeachersList = () => {
  const teachers = useSelector(selectTeachers);
  console.log(teachers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachers()).catch((error) => {
      console.error("Error fetching teachers:", error);
    });
  }, [dispatch]);

  return (
    <>
      <ul></ul>
    </>
  );
};

export default TeachersList;
