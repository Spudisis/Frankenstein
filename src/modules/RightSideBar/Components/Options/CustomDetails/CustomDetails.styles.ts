import styled, { css } from 'styled-components'

export const Summary = styled.summary<{ open: boolean }>`
  list-style: none;
  color: white;
  padding: 5px;
  font-size: 18px;
  ${({ open }) =>
    !open
      ? css`
          border-bottom: 1px solid gray;
        `
      : ''}

  position: relative;
  cursor: pointer;
  &:hover {
    color: gray;
    transition: 0.3s;
  }
`

export const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`

export const Label = styled.label<{ chosen: boolean }>`
  color: white;
  font-size: 20px;
  padding: 10px;
  box-sizing: content-box;
  cursor: pointer;
  ${({ chosen }) =>
    chosen
      ? css`
          border-radius: 15px;
          border: 1px solid white;
        `
      : css`
          border: 1px solid transparent;
        `}
`

export const Input = styled.input``
