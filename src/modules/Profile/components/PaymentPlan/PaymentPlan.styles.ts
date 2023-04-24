import styled from "styled-components";

export const PaymentRoot = styled.div`
  color: white;
  position: relative;
  width: 80%;
  justify-self: center;
  border-radius: 15px;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    min-height: 400px;
  }
  @media screen and (max-width: 560px) {
    width: 100%;
  }
  @media screen and (max-width: 380px) {
    min-height: 450px;
  }
`;
export const OverlayStyle = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ImageBack = styled.div<{ img: string }>`
  position: absolute;

  background-image: url(${(props) => (props.img ? props.img : "")});
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
`;

export const InfoBlock = styled.div`
  padding: 10px;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledSection = styled.p`
  font-size: 22px;
  @media screen and (max-width: 460px) {
    font-size: 18px;
  }
`;

export const StyledNameTier = styled.h4`
  font-size: 24px;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 460px) {
    font-size: 20px;
  }
`;

export const BlockButton = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
export const ChangeButton = styled.button`
  background-color: var(--color-bgc-button-active);
  border: 1px solid var(--color-bgc-button-active);
  font-size: 18px;
  border-radius: var(--br-button);
  margin: 0px auto;
  width: auto;
  padding: 10px 15px;
  color: var(--color-button);

  cursor: pointer;

  justify-content: center;
  transition: 0.2s ease;
  @media (hover: hover) {
    &:hover {
      background-color: black;
    }
  }
  &:disabled {
    cursor: wait;
    background-color: gray;
  }
`;
