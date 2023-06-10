import styled from "styled-components";
import {cls} from '../colors';


export default function PageTitle({first,second}) {
  return (
    <div>
        <TitleWrap>
          <HighlightContainer>
            <Higlight>{first}&nbsp;&nbsp;&nbsp;</Higlight>
          </HighlightContainer>
          {second &&  <HighlightContainer>
            <Higlight>{second}&nbsp;</Higlight>
          </HighlightContainer>}
         
        </TitleWrap>
      </div>
  )
}


const TitleWrap = styled.h1`
margin: 1em;
  font-family: 'Playfair Display SC', serif;
  font-size: 3em;
  transition:  0.4s;
  @media screen and (max-width: 770px) {
    font-size: 1em;
opacity:0;
  }
`

const HighlightContainer = styled.span`
 position: relative;
 display: inline-block;
&:before{
  content: "";
  display: flex;
  height: 2em;
  width: 130%;
  position: absolute;
  background: ${cls.col1};
  background-image: linear-gradient(135deg, ${cls.col1} 0%, ${cls.col1} 50%, ${cls.col2} 100%);
  transform: rotate(-2deg);
  top: -0.3em;
  left: -0.5em;
  border-radius: 28% 25% 20% 24%;
  @media screen and (max-width: 770px) {
    background-image: linear-gradient(135deg, ${cls.col1} 0%,${cls.col2} 40%, ${cls.col2} 100%);
  }
}

`

const Higlight = styled.span`
 position: relative;

`
