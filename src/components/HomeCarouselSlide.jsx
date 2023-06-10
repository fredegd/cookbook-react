import React from "react";
import styled from "styled-components";
export default function (props) {
  const { id, slideTitle, slideDescription, slideBg } = props;
  return (
    <SlideWrap key={id} style={{ backgroundImage: `url(${slideBg})` }}>
      <TextWrap>
        <h2>{slideTitle}</h2>
        <p>{slideDescription}</p>
        <a href="/" className="btn">Learn&nbsp;More</a>
      </TextWrap>
    </SlideWrap>
  );
}

const SlideWrap = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  filter: sepia(20%);
  transition: all 0.5s;
   >*{
    opacity:1;
    transition: all 0.4s;
   }

  @media (max-width: 760px) and (orientation: landscape) {
    min-height: auto;
    padding: 70px, 20px;

  }
  @media (max-width: 760px) and (orientation: portrait) {
    min-height: 70vh;
    padding: 70px, 20px;
  }
`;

const TextWrap = styled.div`
max-width: 900px;
min-width: 280px;
text-align: center;

  h2 {
    font-size: 4em;
    line-height: 1.1;
    color: white;
    font-weight: 700;
    margin-bottom: 10px;
    text-shadow: 0 5px 5px rgb(0, 0, 0);

    @media (max-width: 990px) {
      font-size: 2.5em;
    }
  }

  p {
    font-size: 1em;
    color: white;
  }

  .btn {
    font-size: 1em;
    color:  rgb(60, 179, 113);
    background-color: #abcdef;
    display: inline-block;
    padding: 1em 2em;
    margin-top: 1em;  
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;

    transition: all 0.5s;
    &:hover {
      font-size: 1.1em;
      font-weight: 700;
      letter-spacing: 3px;
    }
  }
  /* >*{
    opacity:0;
    transform: translateY(-45px);
    transition:all 1s; */



`
