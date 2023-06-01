import React from 'react'
import { AvailableProjects, Header, ProjectsUser } from 'src/modules'
import { Bgc, DefaultWrapper } from 'src/UI'

export const MainPage = () => {
  return (
    <Bgc>
      <Header />
      <DefaultWrapper>
        <ProjectsUser />
        <AvailableProjects />
      </DefaultWrapper>
    </Bgc>
  )
}
