import React from "react";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const { userId } = useParams();
  console.log(userId);
  return <div>Profile: {userId}</div>;
};
