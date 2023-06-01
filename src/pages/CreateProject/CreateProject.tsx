import React from 'react'
import { Bgc, DefaultWrapper } from 'src/UI'
import { NamePage, WrapperDoubleGrid } from 'src/components'
import { Header, CreateProject as Project, LastUpdatedProject, ProjectsUser } from 'src/modules'

export const CreateProject = () => {
  return (
    <Bgc>
      <Header />
      <DefaultWrapper>
        <NamePage name={'Projects'} />
        <WrapperDoubleGrid>
          <LastUpdatedProject />
          <Project />
        </WrapperDoubleGrid>
        <ProjectsUser />
      </DefaultWrapper>
    </Bgc>
  )
}
