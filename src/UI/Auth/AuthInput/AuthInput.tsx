import React from 'react'
import styled from 'styled-components'
import { type ChildrenProp } from '../../ChildrenProp'

export interface PropsErrorsBool {
  error?: boolean
}

export const AuthInput = ({ children, error }: ChildrenProp & PropsErrorsBool) => {
  return <Input error={error}>{children}</Input>
}

const Input = styled.div<PropsErrorsBool>`
  position: relative;
  margin-bottom: 20px;

  & label:first-child {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    color: white;
    @media screen and (max-width: 1800px) {
      font-size: 18px;
    }
    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
  input {
    border: 1px solid ${(props) => (props.error ? 'red' : 'black')};
    color: black;
    background-color: #d9d9d9;
    border-radius: 0px;
    height: 60px;
    padding-left: 15px;
    font-size: 25px;

    @media screen and (max-width: 1800px) {
      height: 40px;
      font-size: 22px;
    }
    @media screen and (max-width: 500px) {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 1800px) {
    margin-bottom: 18px;
  }
`
