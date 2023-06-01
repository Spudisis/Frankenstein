import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyledButton } from './Pictures.styles'
import { Grid } from 'src/UI'
import { Picture } from '..'
import { type MappingPictures } from './Pictures.types'
import { useLocation } from 'react-router-dom'

export const Pictures = observer(({ type, store }: MappingPictures) => {
  const location = useLocation()
  React.useEffect(() => {
    // if (location.pathname === )
    store.getTemplates(type)
  }, [store, type])

  const handleClick = () => {
    store.open = !store.open
  }

  return (
    <>
      {store.templates.length > 0 && (
        <>
          <StyledButton onClick={handleClick}>{type}</StyledButton>

          {store.open && (
            <Grid open={store.open} columns="repeat(2, 1fr)" rowGap="10px">
              {store.templates.map((elem, index) => {
                return <Picture elem={elem} type={type} key={elem.id} />
              })}
            </Grid>
          )}
        </>
      )}
    </>
  )
})
