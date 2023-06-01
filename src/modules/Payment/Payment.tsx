import React from 'react'
import { ChoosePlan } from './components'
import { Head } from './Payment.styles'
import { PaymentStore } from './store/store'
import { useParams } from 'react-router-dom'

export const Payment = () => {
  const { userId } = useParams()
  React.useEffect(() => {
    if (userId) PaymentStore.getUser(userId)
  }, [userId])
  return (
    <div>
      <Head>Tiers</Head>
      <ChoosePlan />
    </div>
  )
}
