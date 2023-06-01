import React from 'react'
import { ProfileChange as StoreChange } from './store'
import { AuthStore } from 'src/store/Auth'
import { observer } from 'mobx-react-lite'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { RESOLVER } from './ProfileChange.schema'
import { type UserInfoT } from './ProfileChange.types'
import { Nickname, Password } from './components'
import { DefaultButton } from 'src/UI'
import { useNavigate } from 'react-router-dom'
import { PROFILE } from 'src/routes/urlsPages'
import { STATUS_LOADING } from 'src/domains'
import { StyledSpan, WrapperButton } from './ProfileChange.styles'
export const ProfileChange = observer(() => {
  const id = AuthStore.user?.id
  const info = StoreChange.info
  const loading = StoreChange.loading === STATUS_LOADING.LOADING
  const error = StoreChange.loading === STATUS_LOADING.ERROR
  React.useEffect(() => {
    if (id) {
      const idString = String(id)
      StoreChange.getUserInfo(idString)
    }
  }, [id])

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset
  } = useForm<UserInfoT>({
    mode: 'onBlur',
    resolver: RESOLVER
  })

  React.useEffect(() => {
    if (info) {
      reset(info)
    }
  }, [reset, info])

  const redirect = useNavigate()
  const watchNickname = watch('nickname')
  const onSubmit: SubmitHandler<UserInfoT> = async (data) => {
    const res = await StoreChange.changeUserInfo({
      nickname: data.nickname,
      password: data.password
    })
    if (res) {
      redirect(PROFILE + id)
    }
  }
  React.useEffect(() => {
    if (error) {
      StoreChange.loading = STATUS_LOADING.SUCCESS
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchNickname])
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Nickname register={register} errors={errors} />
      <Password register={register} errors={errors} />
      <Password register={register} repeatPass errors={errors} />
      <WrapperButton>
        <DefaultButton
          text={'Изменить'}
          padding="15px 25px"
          fontSize={26}
          padding1800="15px 25px"
          margin="20px 0px 0px"
          disabled={loading}
        />
        {error && <StyledSpan>{StoreChange.err}</StyledSpan>}
      </WrapperButton>
    </form>
  )
})
