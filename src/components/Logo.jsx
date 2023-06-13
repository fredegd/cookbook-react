import styled from 'styled-components'
import cbLogo from "../assets/Logo.svg"
import {cls} from '../colors';
export default  function Logo(){
  return (
    <LogoContainer>
       <img src={cbLogo} alt="Logo"/>
     </LogoContainer>
  )
}

const LogoContainer = styled.div`
width: 2.5em;
height: 2.8em;
border-radius: 3em;
margin-left: 1em;
display:flex;
justify-content:center;
align-items: center;
background: ${cls.col2};
z-index: 9999;
transition: rotate 1s;
&:hover{
  rotate: 360deg;
}

`

