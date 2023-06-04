import styled from 'styled-components'
import cbLogo from "../assets/Logo.svg"
export default  function Logo(){
  return (
    <LogoContainer>
       <img src={cbLogo} alt="Logo"/>
     </LogoContainer>
  )
}

const LogoContainer = styled.div`
margin: 0 1em;
padding:0.8em;
width: 3em;
height: 3em;
border-radius: 3em;
display:flex;
justify-content:center;
align-items: center;
background: #abcdef;
flex-grow: 1;
`

