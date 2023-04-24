import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70px;
`;
export const NameField = styled.span`
  color: gray;
  font-size: 18px;
  @media screen and (max-width: 380px) {
    font-size: 16px;
  }
`;
export const InfoField = styled.p`
  min-height: 40px;
  font-size: 24px;
  border-bottom: 1px solid gray;
  @media screen and (max-width: 380px) {
    font-size: 18px;
  }
`;
