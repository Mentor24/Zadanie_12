import styled from 'styled-components'
import Button from '@mui/material/Button'

const S = {

Section: styled.div`
  flex:1;
  width: 85%;
  margin-top: 4%;
  display: flex;
  align-items: center;
  `,

  StyledButton: styled(Button)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #413fb5;
  font-weight: 700;
  font-size: 20px;
  font-family:system-ui; 
  `,
}

const ButtonBox = ({ButtonText}) => {
    return (

    <S.Section>
    <S.StyledButton variant="contained">{ButtonText}</S.StyledButton>
    </S.Section>
    )
    }
  
    export default ButtonBox;