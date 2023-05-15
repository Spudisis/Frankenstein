import React from "react";
import { Link } from "react-router-dom";
import { MiniatureProjects } from "src/domains";
import { BUILD_URL } from "src/routes/urlsPages";
import { Wrapper, Image, Information, Str } from "./Project.styles";
import placeholder from "src/assets/placeholder.png";
import { formatDateTime } from "src/utils";
export const Project = ({
  id,
  uid,
  name,
  miniature,
  statusAccess,
  layout,
  updatedAt,
  createdAt,
}: MiniatureProjects) => {
  return (
    <Link to={BUILD_URL + uid}>
      <Wrapper>
        <Image
          src={miniature ? miniature : placeholder}
          alt={`${name} project miniature`}
          bgc={!miniature}
        />
        <Information>
          <Str>UID: {uid}</Str>
          <Str>Name: {name}</Str>
          <Str>StatusAccess: {`${statusAccess}`}</Str>
          <Str>Updated: {formatDateTime(updatedAt)}</Str>
          <Str>Created: {formatDateTime(createdAt)}</Str>
        </Information>
      </Wrapper>
    </Link>
  );
};
