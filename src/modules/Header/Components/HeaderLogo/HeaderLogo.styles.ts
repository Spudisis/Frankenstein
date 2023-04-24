import styled from "styled-components";
import logo from "../../assets/logo.png";

export const StyledLogo = styled.div`
  width: 80px;
  height: 90px;
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 600px) {
    width: 150px;
    height: 170px;
    margin-bottom: 20px;
  }
`;
