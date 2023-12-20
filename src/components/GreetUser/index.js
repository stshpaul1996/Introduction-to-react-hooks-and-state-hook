import {useState} from 'react'

import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, setterFun] = useState('')
  const onChangeName = event => setterFun(event.target.value)
  return (
    <MainContainer>
      <NameInput
        type="text"
        placeholder="Your name"
        value={name}
        onchange={onChangeName}
      />
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
