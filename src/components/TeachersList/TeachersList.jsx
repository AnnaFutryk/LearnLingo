import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../../redux/teachers/teachers-operations";
import { selectTeachers } from "../../redux/teachers/teachers-selectors";
import MainBtn from "../Buttons/MainBtn/MainBtn";
import TeacherItem from "../TeacherItem/TacherItem";
import { List, NoFoundTxt } from "./TeacherList.styled";

const TeachersList = () => {
  const [renderCard, setRenderCard] = useState(4);
  const { teachers, isLoading } = useSelector(selectTeachers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachers()).catch((error) => {
      console.error("Error fetching teachers:", error);
    });
  }, [dispatch]);

  const handleLoadMore = () => {
    setRenderCard((prev) => prev + 4);
  };

  return (
    <>
      <List>
        {teachers?.length !== 0 ? (
          teachers
            .slice(0, renderCard)
            .map((item, index) => <TeacherItem key={index} item={item} />)
        ) : (
          <NoFoundTxt>No teachers found matching your criteria</NoFoundTxt>
        )}
        {renderCard < teachers?.length && !isLoading && (
          <MainBtn
            type={"button"}
            width={"183px"}
            onClick={handleLoadMore}
            text={"Load more"}
            marginTop={"64px"}
          />
        )}
      </List>
    </>
  );
};

export default TeachersList;
