import React from 'react'

import styled from 'styled-components'
import { JsxElement } from 'typescript'

export const Head = ({ text }: { text: string | JSX.Element }) => {
  return <Head3h>{text}</Head3h>
}

const Head3h = styled.h3`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 48px;
  color: white;
  @media screen and (max-width: 1800px) {
    margin-bottom: 14px;
    font-size: 40px;
  }
  @media screen and (max-width: 500px) {
    font-size: 30px;
    text-align: center;
    margin-bottom: 5px;
  }
`
