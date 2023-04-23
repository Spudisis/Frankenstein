import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
  @media (hover: hover) {
    &:hover {
      box-shadow: 0px 0px 2px 2px gray;
    }
  }
`;

export const Image = styled.img`
  object-fit: contain;
  height: 200px;
`;

export const Title = styled.h4`
  display: block;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 280px;
`;

export const LastEdit = styled.span`
  display: block;
  color: gray;
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 280px;
`;

export const Info = styled.div`
  border: 1px solid #4b4b4b;
  padding: 5px;
  height: 60px;

  border-radius: 0px 0px 10px 10px;
`;
