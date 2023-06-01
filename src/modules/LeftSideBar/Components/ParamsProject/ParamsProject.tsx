import { observer } from 'mobx-react-lite'
import React, { type MouseEvent } from 'react'
import { DefaultButton, SidebarName } from 'src/UI'
import { Wrapper, ModalStyled, Content, BgcModal, InputDelete, Error, CloseModalStyled } from './ParamsProject.styles'
import { ProjectOption } from '../../store'
import App from 'src/store/Application'
import { STATUS_LOADING } from 'src/domains'
import { useNavigate } from 'react-router-dom'
import { main } from 'src/routes/urlsPages'
import { type ModalTypes } from './ParamsProject.types'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const ParamsProject = observer(() => {
  const { uid, name } = App.project

  const { loading } = ProjectOption
  const redirect = useNavigate()
  const [modalOpen, setModalOpen] = React.useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const deleteProject = async () => {
    if (!uid) {
      console.log('uid отсутствует')
      return
    }
    const res = await ProjectOption.deleteProject(uid)
    if (res) {
      redirect(main)
    }
  }

  const statusLoad = loading === STATUS_LOADING.LOADING
  return (
    <div>
      <SidebarName>Actions</SidebarName>
      <Wrapper>
        <DefaultButton
          text={'Save'}
          padding1800="5px 10px"
          fontSize={22}
          width="100%"
          disabled={statusLoad}
          onClick={async () => {
            await App.saveProject()
          }}
          margin="10px 0px"
        />
        <DefaultButton
          text={'Run build'}
          padding1800="5px 10px"
          fontSize={22}
          width="100%"
          disabled={statusLoad}
          onClick={async () => {
            await ProjectOption.runBuild({ uid: App.project.uid })
          }}
          margin="10px 0px"
        />
        <DefaultButton
          text={'Delete project'}
          padding1800="5px 10px"
          fontSize={22}
          width="100%"
          disabled={statusLoad}
          onClick={openModal}
        />
      </Wrapper>
      {modalOpen && <Modal closeModal={setModalOpen} action={deleteProject} nameProject={name} />}
    </div>
  )
})

export const Modal = observer(({ closeModal, action, nameProject }: ModalTypes) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [text, setText] = React.useState('')
  const [error, setError] = React.useState(false)
  const { loading } = ProjectOption
  const loadStatus = loading === STATUS_LOADING.LOADING
  const errorStatus = loading === STATUS_LOADING.ERROR
  React.useEffect(() => {
    setError(false)
  }, [text, loading])

  React.useEffect(() => {
    if (errorStatus) {
      setError(true)
    }
  }, [loading])

  const onClickModal = (e: MouseEvent<HTMLDivElement>) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      closeModal(false)
      return
    }
    return null
  }

  const clickConfirm = () => {
    if (text !== nameProject) {
      setError(true)
      return
    }
    action()
  }

  return (
    <>
      {createPortal(
        <BgcModal onClick={onClickModal}>
          <ModalStyled ref={ref}>
            <Content>
              <p>Необходимо дополнительное подтверждение. Для удаления проекта введите "{nameProject}" ниже:</p>
              {error && <Error>{errorStatus ? 'Непредвиденная ошибка' : 'Названия не совпадают'}</Error>}
              <div>
                <InputDelete
                  type="text"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value)
                  }}
                  disabled={loadStatus}
                />
                <DefaultButton
                  onClick={clickConfirm}
                  text={'Подтвердить'}
                  margin="0px"
                  width="100%"
                  disabled={loadStatus}
                />
                <CloseModalStyled
                  onClick={() => {
                    closeModal(false)
                  }}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </CloseModalStyled>
              </div>
            </Content>
          </ModalStyled>
        </BgcModal>,
        document.body
      )}
    </>
  )
})
