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
 z-index: 1;
width: 2.5em;
height: 2.8em;
border-radius: 3em;
display:flex;
justify-content:center;
align-items: center;
background: ${cls.col2};
flex-grow: 1;
`

