import React from 'react'

import { StoreProjectsUser } from './store/store'
import { Wrapper } from 'src/components/WrapperProjects'
import { observer } from 'mobx-react-lite'
import { useLocation, useParams } from 'react-router-dom'
import { AuthStore } from 'src/store/Auth'
import { type ShowMoreProp } from 'src/domains'
import { PROFILE, PROJECTS, main } from 'src/routes/urlsPages'

export const ProjectsUser = observer(() => {
  const location = useLocation()
  const idHostUser = AuthStore.user?.id
  const { userId } = useParams()
  const { projects, loading, size, offset, limit } = StoreProjectsUser

  React.useEffect(() => {
    const id = Number(userId ?? idHostUser)
    if (id) {
      StoreProjectsUser.userIdProjects = id
    }
    if (!id) {
      StoreProjectsUser.userIdProjects = null
    }
  }, [userId, idHostUser])

  React.useEffect(() => {
    if ([main, PROJECTS].includes(location.pathname) || location.pathname.slice(0, -2) === PROFILE.slice(0, -1)) {
      StoreProjectsUser.initialProjects()
    }
  }, [location.pathname])

  const ShowMore = (event: ShowMoreProp) => {
    StoreProjectsUser.offset = event.selected + 1
  }

  return (
    <div>
      <Wrapper
        ShowMore={ShowMore}
        nameSection={'Мои проекты'}
        projects={projects}
        loading={loading}
        size={size}
        limit={limit}
        offset={offset}
        path={location.pathname}
      />
    </div>
  )
})
