import {
  Avatar,
  Comment,
  Name,
  RatingBlock,
  UserBlock,
  Wrapp,
  Wrapper,
} from "./ReviewItem.styled";
import { ReactComponent as StarSvg } from "../../../images/card/star.svg";
import ava from "../../../images/card/ava.avif";

const ReviewItem = ({ review }) => {
  const { comment, reviewer_name, reviewer_rating } = review;

  return (
    <Wrapper>
      <UserBlock>
        <Avatar src={ava} alt={"user avatar"} width={44} />
        <Wrapp>
          <Name>{reviewer_name}</Name>
          <RatingBlock>
            <StarSvg />
            <p>{reviewer_rating}</p>
          </RatingBlock>
        </Wrapp>
      </UserBlock>
      <Comment>{comment}</Comment>
    </Wrapper>
  );
};

export default ReviewItem;
