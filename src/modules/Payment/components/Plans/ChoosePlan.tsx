import React from 'react'
import standard from 'src/assets/Standart.jpg'
import premium from 'src/assets/premium.jpg'
import ultra from 'src/assets/ultra.jpg'
import { Content, Grid, Head } from './ChoosePlan.styles'
import { PaymentWrapper, PaymentBuff } from 'src/components'

export const ChoosePlan = () => {
  const plans = [
    { tiers: 'STANDART', image: standard },
    { tiers: 'PREMIUM', image: premium },
    { tiers: 'ULTRA', image: ultra }
  ]
  return (
    <>
      <Grid>
        {plans.map((elem) => (
          <PaymentWrapper key={elem.tiers} selectImage={elem.image}>
            <Content>
              <Head>{elem.tiers}</Head>
              <PaymentBuff tier={elem.tiers} />
            </Content>
          </PaymentWrapper>
        ))}
      </Grid>
    </>
  )
}
