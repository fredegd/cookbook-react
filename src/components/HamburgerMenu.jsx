import styled from "styled-components";

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
  margin-right: 1em;
  right: 3rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: default;
  z-index: 1000;
  text-align: center;
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 3px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
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