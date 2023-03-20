import React from "react";
import { ConnectDragSource } from "react-dnd/dist/types";
import styled from "styled-components";

type PicturesProp = {
  src: string;
  alt: string;
  name: string;

  isDragging?: boolean;
  refDrag?: ConnectDragSource;
};

export const Pictures = ({
  src,
  alt,
  name,
  refDrag,
  isDragging,
}: PicturesProp) => {
  return (
    <PictureStyled ref={refDrag} isDragging={isDragging}>
      <img src={src} alt={alt} />
      <span>{name}</span>
    </PictureStyled>
  );
};

const PictureStyled = styled.div<Partial<PicturesProp>>`
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #3e3d3d;
  border: 1px solid #3e3d3d;
  overflow: hidden;
  align-self: center;
  justify-self: center;
  opacity: ${(props) => (props.isDragging ? "0.5" : "1")};
  ${(props) => (props.isDragging ? "background-color: gray;" : "")};
  color: white;
  img {
    opacity: ${(props) => (props.isDragging ? "0.5" : "1")};
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
