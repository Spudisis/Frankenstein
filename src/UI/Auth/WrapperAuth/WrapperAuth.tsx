import React from "react";
import styled from "styled-components";

export const WrapperAuth = styled.div`
  background-color: #2c2c2c;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 20px 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  margin: 5px 0px;
  @media screen and (max-width: 768px) {
    box-shadow: none;
    border-radius: 0px;
    margin: 0px;
    width: 100vw;
    height: 100%;
  }
  @media screen and (max-width: 500px) {
    padding: 10px 40px;
  }
  @media screen and (max-width: 360px) {
    padding: 10px;
  }
`;
