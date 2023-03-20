import styled from "styled-components";


export const Container = styled.div`
  display: block;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: #171717;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #2c2c2c;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #171717;
    border-radius: 10px;

    box-shadow: inset 0 0 6px rgb(0, 0, 0);
  }
`;
