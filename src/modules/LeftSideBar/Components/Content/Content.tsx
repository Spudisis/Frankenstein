import { ContentWrapper } from 'src/UI/SideBar/Content/Content'
import { Button, Section, Wrapper } from 'src/UI'

import { type TypeContent } from './Content.types'
import { ParamsProject } from '../ParamsProject'
import { ListItems } from '../ListItems'
import React from 'react'

export const ContentComponent = ({ overflow, section, setSection }: TypeContent) => {
  return (
    <ContentWrapper overflow={overflow}>
      <Wrapper height="auto" borderBottom={'1px solid black'} padding="0px">
        <Button
          name="Project"
          changeProp={setSection}
          prop={false}
          padding="0px"
          margin="10px 0px"
          active={!section}
        ></Button>
        <Button
          name="Layouts"
          changeProp={setSection}
          prop={true}
          padding="0px"
          margin="10px 0px"
          active={section}
        ></Button>
      </Wrapper>
      <Section>{section ? <ListItems /> : <ParamsProject />}</Section>
    </ContentWrapper>
  )
}

export const Content = React.memo(ContentComponent)
