import styled from 'styled-components'
import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  
  palette: {
    primary: {
      main: '#413fb5',
      darker: '#343290',
    },
  },
});

const S = {

Section: styled.div`
  flex: 1;
  width: 85%;
  margin-top: 4%;
  display: flex;
  align-items: center;
  `,

StyledButton: styled(Button)`
  && {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #413fb5;
    font-size: 14px;
    font-family: system-ui; 
    text-transform: none;
    }
  `,
}

const ButtonBox = ({ButtonText}) => {
    return (

    <S.Section>
      <ThemeProvider theme={theme}>
        <S.StyledButton variant="contained" color="primary" >{ButtonText}</S.StyledButton>
      </ThemeProvider>
    </S.Section>
    )
    }
  
    export default ButtonBox;