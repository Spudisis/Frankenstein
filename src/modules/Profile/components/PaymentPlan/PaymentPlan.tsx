import { observer } from 'mobx-react-lite'
import React from 'react'
import { StoreProfile } from '../../store'
import { StyledSection, StyledNameTier, ChangeButton, BlockButton } from './PaymentPlan.styles'
import standard from 'src/assets/Standart.jpg'
import premium from 'src/assets/premium.jpg'
import ultra from 'src/assets/ultra.jpg'
import { PaymentBuff, PaymentWrapper } from 'src/components'

import { Link } from 'react-router-dom'
import { PAYMENT } from 'src/routes/urlsPages'
import { AuthStore } from 'src/store/Auth'
export const PaymentPlan = observer(() => {
  const [openModal, setOpenModal] = React.useState(false)

  const payment = StoreProfile.user?.tiers
  if (!payment || !StoreProfile.user) {
    return null
  }
  const selectImage =
    payment === 'ULTRA' ? ultra : payment === 'PREMIUM' ? premium : payment === 'STANDART' ? standard : ''

  const handleOpenModalChoosePlan = () => {
    setOpenModal(!openModal)
  }

  return (
    <PaymentWrapper selectImage={selectImage}>
      <StyledNameTier>Статус подписки: {StoreProfile.user.tiers}</StyledNameTier>
      <StyledSection>Действует до: </StyledSection>

      <PaymentBuff tier={StoreProfile.user.tiers} />
      <>
        {StoreProfile.userSelf && (
          <BlockButton
            onClick={() => {
              handleOpenModalChoosePlan()
            }}
          >
            <Link to={PAYMENT + StoreProfile.idUser}>
              <ChangeButton>Сменить тариф</ChangeButton>
            </Link>
          </BlockButton>
        )}
      </>
    </PaymentWrapper>
  )
})
