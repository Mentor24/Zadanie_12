import styled from 'styled-components'

const S = {

Section: styled.div`
  flex:1;
  width: 85%;
  margin-top: 4%;
  border: solid 1px;
  border-color: #413fb5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  `,

link: styled.a`
  text-decoration: none; 
  color: black;
  font-weight: 650;
  font-family: system-ui;
  `,
}

const LogoBox = ({Icon, alt, link, LogoBoxText}) => {
    return (

    <S.Section>
    <img src={Icon} alt={alt}/>
    <S.link href={link}>{LogoBoxText}</S.link>
    </S.Section>
    )
    }
  
    export default LogoBox;