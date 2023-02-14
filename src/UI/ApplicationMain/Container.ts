import styled from "styled-components";

export const Container = styled.div`
  display: block;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ececec;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgb(0, 0, 0);
  }
`;
