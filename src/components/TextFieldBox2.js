import styled from 'styled-components'
import TextField from '@mui/material/TextField'

const S = {

Section: styled.div`
  flex:1;
  width: 85%;
  margin-top: 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `,

  s: styled.div`
  height:100%;
  width:48%; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  `,

  StyledTextField: styled(TextField)`
  width: 100%;
  height:100%;
  `,

}

const TextFieldBox2 = ({label1, label2}) => {
    return (

    <S.Section>
    <S.s><S.StyledTextField id="outlined-basic" label = {label1} variant="outlined"/></S.s>
    <S.s><S.StyledTextField id="outlined-basic" label = {label2} variant="outlined"/></S.s>
    </S.Section>
    )
    }
  
    export default TextFieldBox2;