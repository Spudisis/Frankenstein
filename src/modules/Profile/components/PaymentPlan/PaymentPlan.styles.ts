import styled from 'styled-components'

export const StyledSection = styled.p`
  font-size: 22px;
  @media screen and (max-width: 460px) {
    font-size: 18px;
  }
`

export const StyledNameTier = styled.h4`
  font-size: 24px;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 460px) {
    font-size: 20px;
  }
`

export const BlockButton = styled.div`
  display: flex;
  a {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
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
`
