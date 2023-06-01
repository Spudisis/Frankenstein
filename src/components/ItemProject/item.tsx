import React from 'react'
import { type MiniatureProjects } from 'src/domains'
import { Image, Info, LastEdit, Title, Wrapper } from './item.styles'
import { Link } from 'react-router-dom'
import { Trans } from 'react-i18next'
import placeholder from 'src/assets/placeholder.png'
import { BUILD_URL } from 'src/routes/urlsPages'
import { formatDateTime } from 'src/utils'

export const Item = ({ id, uid, name, miniature, statusAccess, layout, updatedAt, createdAt }: MiniatureProjects) => {
  return (
    <Link to={BUILD_URL + uid}>
      <Wrapper>
        <Image
          src={miniature ? process.env.REACT_APP_URL_BACKEND + miniature : placeholder}
          alt={`${name} project miniature`}
          bgc={!miniature}
        />
        <Info>
          <Title>{name}</Title>
          <LastEdit>
            <Trans i18nKey="UsersProjects.lastUpd">Последнее обновление:</Trans>
            {formatDateTime(updatedAt)}
          </LastEdit>
        </Info>
      </Wrapper>
    </Link>
  )
}
