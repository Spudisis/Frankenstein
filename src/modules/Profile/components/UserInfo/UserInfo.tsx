import { observer } from 'mobx-react-lite'
import React from 'react'
import { StoreProfile } from '../../store'
import { Block, InfoField, NameField, Wrapper } from './UserInfo.styles'

export const UserInfo = observer(() => {
  const { user } = StoreProfile

  return (
    <Wrapper>
      <Block>
        <NameField>nickname</NameField>
        <InfoField>{user?.nickname}</InfoField>
      </Block>
      <Block>
        <NameField>Email</NameField>
        <InfoField>{user?.email}</InfoField>
      </Block>
      <Block>
        <NameField>Tiers</NameField>
        <InfoField>{user?.tiers}</InfoField>
      </Block>
    </Wrapper>
  )
})
