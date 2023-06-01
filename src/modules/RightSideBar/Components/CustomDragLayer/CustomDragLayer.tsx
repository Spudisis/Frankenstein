import type { CSSProperties } from 'react'
import type { XYCoord } from 'react-dnd'
import { useDragLayer } from 'react-dnd'
import { MaxWidth } from 'src/UI'
import { ItemTypesDNDPictures } from 'src/constants'

import { FHMain } from '../../../ApplicationWrapper/Components/FHMain'
import { Button, Text } from 'src/modules/ApplicationWrapper/Components/Elements'
import { type Module, type SubModules, typeFH } from 'src/domains'
import { MaxWidthButton, MaxWidthText } from 'src/UI/CustomLayoutDND/MaxWidth'
import { WrapperCustom } from 'src/modules/ApplicationWrapper/Components'

const layerStyles: CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 10000,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
}

function getItemStyles (initialOffset: XYCoord | null) {
  if (!initialOffset) {
    return {
      display: 'none'
    }
  }

  const { x, y } = initialOffset
  const transform = `translate(${x - 165}px, ${y - 10}px)`
  return {
    transform,
    WebkitTransform: transform
  }
}

export const CustomDragLayer = () => {
  const { itemType, isDragging, item, initialOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    // initialOffset currentOffset нужен чтобы превью могло перемещаться

    initialOffset: monitor.getClientOffset(),
    isDragging: monitor.isDragging()
  }))

  function renderItem () {
    switch (itemType) {
      case ItemTypesDNDPictures.PicturesHeader:
        // если драгбл в руках это бокс
        return (
          <MaxWidth>
            <FHMain {...{ ...item, parent: typeFH.Header }} />
          </MaxWidth>
        )
      case ItemTypesDNDPictures.PicturesFooter:
        return (
          <MaxWidth>
            <FHMain {...{ ...item, parent: typeFH.Footer }} />
          </MaxWidth>
        )
      case ItemTypesDNDPictures.PicturesButton:
        return (
          <MaxWidthButton>
            <Button
              deleteItemFunc={() => {
                console.log('')
              }}
              newModules={() => {
                console.log('')
              }}
              elem={item as Module}
              parent={''}
              MoveCardFunc={() => {
                console.log('')
              }}
              FindIndex={() => {
                console.log('')
              }}
            />
          </MaxWidthButton>
        )
      case ItemTypesDNDPictures.PicturesWrapper:
        return (
          <MaxWidth>
            <WrapperCustom
              deleteItemFunc={() => {
                console.log('')
              }}
              newModules={() => {
                console.log('')
              }}
              elem={item as SubModules}
              parent={''}
              MoveCardFunc={() => {
                console.log('')
              }}
              FindIndex={() => {
                console.log('sam')
              }}
            />
          </MaxWidth>
        )
      case ItemTypesDNDPictures.PicturesText:
        return (
          <MaxWidthText>
            <Text
              deleteItemFunc={() => {
                console.log('')
              }}
              newModules={() => {
                console.log('')
              }}
              elem={item as SubModules}
              parent={''}
              MoveCardFunc={() => {
                console.log('')
              }}
              FindIndex={() => {
                console.log('')
              }}
            />
          </MaxWidthText>
        )
      default:
        return null
    }
  }

  if (!isDragging) {
    return null
  }
  return (
    // style нужен чтобы превью могло перемещаться
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset)}>{renderItem()}</div>
    </div>
  )
}
