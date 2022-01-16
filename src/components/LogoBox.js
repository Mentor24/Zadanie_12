import styled from 'styled-components'

const S = {

Section: styled.div`
  flex: 1;
  width: 85%;
  margin-top: 4%;
  border: solid 1px;
  border-color: #413fb5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  `,

Link: styled.a`
  text-decoration: none; 
  color: black;
  font-weight: bold;
  font-family: system-ui;
  font-size: 14px;
  `,
}

const LogoBox = ({Icon, alt, link, LogoBoxText}) => {
    return (

    <S.Section>
      <img src={Icon} alt={alt}/> 
      <S.Link href={link}>{LogoBoxText}</S.Link>
    </S.Section>
    )
    }
  
    export default LogoBox;