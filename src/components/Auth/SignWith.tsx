import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { EmptyButton, SignWithStyled } from '../../UI'
import { Trans } from 'react-i18next'

export const SignWith = () => {
  return (
    <SignWithStyled>
      <h4>
        <Trans i18nKey="Auth.SignWith">Войти через...</Trans>
      </h4>
      <div>
        <EmptyButton>
          <FontAwesomeIcon icon={faGoogle} />
        </EmptyButton>
        <EmptyButton>
          <FontAwesomeIcon icon={faGoogle} />
        </EmptyButton>
        <EmptyButton>
          <FontAwesomeIcon icon={faGoogle} />
        </EmptyButton>
        <EmptyButton>
          <FontAwesomeIcon icon={faGoogle} />
        </EmptyButton>
      </div>
    </SignWithStyled>
  )
}
