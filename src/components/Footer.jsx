import styled, { StyleSheetManager } from 'styled-components';

export default function Footer() {
  return (
    <div className='footer'>
      <Foot>
        <p>Copyright &copy; Anne Elvis Fred 2023</p>
      </Foot>
    </div>
  );
}

const Foot = styled.div`
  padding-top: 4em;
  padding-left: 4em;
  padding-bottom: 1em;
`;
