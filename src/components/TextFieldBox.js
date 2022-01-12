import styled from 'styled-components'
import TextField from '@mui/material/TextField'

const S = {

Section: styled.div`
  flex:1;
  width: 85%;
  margin-top: 4%;
  display: flex;
  align-items: center;
  `,

  StyledTextField: styled(TextField)`
  width: 100%;
  height:100%;
  `,

}

const TextFieldBox = ({label}) => {
    return (

    <S.Section>
    <S.StyledTextField id="outlined-basic" label={label} variant="outlined"/>
    </S.Section>
    )
    }
  
    export default TextFieldBox;