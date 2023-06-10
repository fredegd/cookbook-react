import styled from "styled-components";
import {cls} from '../colors';
export default function HamburgerMenu({show,setShow}) {
    // const [click, setClick] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    return (
        <>
            <MenuLabel  onClick={handleClick}>
                    <Icon clicked={show}>&nbsp;</Icon>
            </MenuLabel>
        </>
      );
}

const MenuLabel = styled.div`
  background-color: #abcdef;
  right: 3rem;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  cursor: default;
  z-index: 1;
  text-align: center;
  display: block;
  @media screen and (min-width: 770px) {
    display: none;
  }
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 3px;
  display: inline-block;
  margin-top: 2.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: ${cls.col4};
    width: 3rem;
    height: 3px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
    transform: ${(props) => (props.clicked ? "rotate(-45deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(45deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
`;