import React from 'react'
import { Section, Wrapper, ContentWrapper, Button } from 'src/UI'
import { type ContentProp } from 'src/UI/SideBar/Content/Content'
import { observer } from 'mobx-react-lite'
import { type ScreenAddElemeny, SectionEnum } from 'src/domains/ApplicationTypes'
import { type DropTargetMonitor, useDrop } from 'react-dnd'
import { type DropDND } from 'src/components/CustomDragNDrop/CustomDNDHook.types'
import App from 'src/store/Application'
import { CreateStoreType, CreateTemplate, FindOption } from '../'

import { ItemTypesDND } from 'src/constants'

const ContentComponent = ({ overflow }: Pick<ContentProp, 'overflow'>) => {
  const handleChangeSection = (section: SectionEnum) => {
    App.changeSection(section)
  }
  const section = App.section

  const [{ canDrop, isOver }, drop]: DropDND = useDrop(() => ({
    accept: [ItemTypesDND.Button, ItemTypesDND.Footer, ItemTypesDND.Header, ItemTypesDND.Wrapper, ItemTypesDND.Text],
    drop: ({ id, deleteItemFunc }: ScreenAddElemeny) => {
      handleDeleteDND({ id, deleteItemFunc })
    },
    collect: (monitor: DropTargetMonitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver()
    })
  }))

  const handleDeleteDND = ({ id, deleteItemFunc }: Pick<ScreenAddElemeny, 'id' | 'deleteItemFunc'>) => {
    if (deleteItemFunc) {
      App.clearTarget(id)
      deleteItemFunc({ id })
    } else console.log('not found deleteItemFunc')
  }

  return (
    <ContentWrapper
      overflow={overflow}
      refDND={drop}
      bgcColor={canDrop && isOver ? 'rgba(132, 0, 0, 0.4)' : canDrop ? 'gray' : ''}
    >
      <Wrapper height="auto" borderBottom={'1px solid black'} padding="0px">
        <Button
          name="pictures"
          changeProp={handleChangeSection}
          prop={SectionEnum.pictures}
          padding="0px"
          margin="10px 0px"
          active={section === SectionEnum.pictures}
        ></Button>
        <Button
          name="options"
          changeProp={handleChangeSection}
          prop={SectionEnum.options}
          padding="0px"
          margin="10px 0px"
          active={section === SectionEnum.options}
        ></Button>
      </Wrapper>
      <Section>
        {section === SectionEnum.pictures ? (
          <CreateStoreType />
        ) : section === SectionEnum.options ? (
          <>
            <FindOption />
            <CreateTemplate />
          </>
        ) : (
          <div></div>
        )}
      </Section>
    </ContentWrapper>
  )
}

export const Content = observer(ContentComponent)
