import React from 'react'
import styled from 'styled-components'
import { type PropsErrorsBool } from '../Auth/AuthInput/AuthInput'
import { type ChildrenProp } from '../ChildrenProp'

export const CustomCheckBox = ({ children, error }: ChildrenProp & PropsErrorsBool) => {
  return <CheckBox error={error}>{children}</CheckBox>
}

const CheckBox = styled.div<PropsErrorsBool>`
  position: relative;
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    margin-top: 10px;
  }
  label {
    span {
      font-size: 20px;
      color: white;
      display: inline-flex;
      align-items: center;
      user-select: none;
      @media screen and (max-width: 500px) {
        font-size: 16px;
      }
    }
    span::before {
      content: '';
      display: inline-block;
      width: 25px;

      height: 25px;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid ${(props) => (props.error ? 'red' : '#adb5bd')};

      border-radius: 50%;
      margin-right: 0.5em;
    }
    & > input:not(:disabled):not(:checked) + span:hover::before {
      background-color: #8a8a8a;
    }
    & > input:checked + span::before {
      background-color: white;
      border: 3px solid ${(props) => (props.error ? 'red' : '#adb5bd')};
    }
    input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
  }
`
