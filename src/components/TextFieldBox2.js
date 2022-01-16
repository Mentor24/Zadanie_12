import styled from 'styled-components'
import { TextField } from '@mui/material'

const S = {

Section: styled.div`
  flex: 1;
  width: 85%;
  margin-top: 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `,

StyledTextField: styled(TextField)`
  height: 100%;
  width: 48%; 
  `,
}

const TextFieldBox2 = ({label1, label2}) => {
    return (

    <S.Section>
      <S.StyledTextField id="outlined-basic" label = {label1} variant="outlined"/>
      <S.StyledTextField id="outlined-basic" label = {label2} variant="outlined"/>
    </S.Section>
    )
    }
  
    export default TextFieldBox2;