import React from 'react'
import { Wrapper } from 'src/components'
import { StoreProjects } from './store/Store'
import { observer } from 'mobx-react-lite'
import { type ShowMoreProp } from 'src/domains'
import { useLocation } from 'react-router-dom'
import { main } from 'src/routes/urlsPages'

export const AvailableProjects = observer(() => {
  const { loading, projects, size, offset, limit } = StoreProjects
  const location = useLocation()
  React.useEffect(() => {
    if ([main].includes(location.pathname)) {
      StoreProjects.getProjects()
    }
  }, [offset, limit])

  const ShowMore = (selectedItem: ShowMoreProp) => {
    StoreProjects.offset = selectedItem.selected + 1
  }

  return (
    <Wrapper
      loading={loading}
      projects={projects}
      size={size}
      ShowMore={ShowMore}
      offset={offset}
      limit={limit}
      nameSection="Проекты пользователей"
    />
  )
})
