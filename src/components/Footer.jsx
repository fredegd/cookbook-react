import styled, { StyleSheetManager } from "styled-components";

export default function Footer(){
  return (
    <Foot>
      <p>Copyright &copy; Anne Elvis Fred 2023</p>
    </Foot>
  )
}

const Foot = styled.div`
padding: 4em;
`