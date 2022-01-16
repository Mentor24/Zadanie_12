import styled from 'styled-components'
import { Checkbox } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  
  palette: {
    primary: {
      main: '#413fb5',
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

Link: styled.a`
  border-bottom: solid #413fb5 3px;
  text-decoration: none; 
  color: black;
  `,
  
Paragraph: styled.span`
  font-size: 14px;
  font-family: system-ui;
  font-weight: 500;
  `,
}

const CheckboxBox = ({Text, TextLink}) => {
    return (

      <S.Section>
        <ThemeProvider ThemeProvider theme={theme}>
          <Checkbox color="primary"/>
        </ThemeProvider>
        <S.Paragraph>{Text} <S.Link href="#">{TextLink}</S.Link></S.Paragraph>
      </S.Section>
    )
    }
  
    export default CheckboxBox;