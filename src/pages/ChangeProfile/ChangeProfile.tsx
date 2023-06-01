import React from 'react'
import { Bgc, DefaultWrapper } from 'src/UI'
import { NamePage } from 'src/components'
import { Header, ProfileChange } from 'src/modules'

export const ChangeProfile = () => {
  return (
    <Bgc>
      <Header />
      <DefaultWrapper>
        <NamePage name={'Change profile'} />
        <ProfileChange />
      </DefaultWrapper>
    </Bgc>
  )
}
