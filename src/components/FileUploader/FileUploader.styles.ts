import styled from 'styled-components'

export const StyledFileUpload = styled.label`
  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  position: relative;
  display: block;
  width: 100%;
  min-height: 60px;
  padding: 5px;
  border: 1px solid #4b4b4b;
  margin-bottom: 10px;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  @media screen and (hover: hover) {
    &:hover {
      border: 1px solid #777373;
    }
  }
`
export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
`
