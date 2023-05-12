import React from "react";
import { useSelector } from "react-redux";
import { selectAllUser } from "../users/userSlice";
const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUser);

  const author = users.find((user) => user.id === Number(userId));
  return <span>{author ? author.name : "Unknown Author"}</span>;
};

export default PostAuthor;
