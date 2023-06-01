import React from 'react'
import { Bgc, DefaultWrapper } from 'src/UI'
import { Header } from 'src/modules'
import { StyledNotFound } from './NotFoundPage.styles'

export const NotFoundPage = () => {
  return (
    <Bgc>
      <Header />
      <DefaultWrapper>
        <StyledNotFound>
          <h2>Страница не найдена</h2>
        </StyledNotFound>
      </DefaultWrapper>
    </Bgc>
  )
}
