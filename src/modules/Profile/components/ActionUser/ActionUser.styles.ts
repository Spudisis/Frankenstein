import styled from 'styled-components'

export const StyledWrapper = styled.div`
  margin-top: 30px;

  display: flex;
  justify-content: space-between;
`

export const StyledButton = styled.button<{ color?: string }>`
  color: white;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  background-color: ${(props) => (props.color ? props.color : 'var(--color-bgc-button-active)')};
  border: 1px solid var(--color-bgc-button-active);
  transition: 0.2s ease;
  @media (hover: hover) {
    &:hover {
      background-color: black;
    }
  }
  &:disabled {
    background-color: gray;
    cursor: wait;
  }
`
