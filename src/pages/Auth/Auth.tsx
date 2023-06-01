import { Authorization, SelectLanguage } from 'src/modules'
import { ApplicationWrapperStyled, Bgc } from 'src/UI'

export const Auth = () => {
  return (
    <Bgc>
      <ApplicationWrapperStyled>
        <SelectLanguage />
        <Authorization />
      </ApplicationWrapperStyled>
    </Bgc>
  )
}
