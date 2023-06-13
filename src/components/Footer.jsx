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
  padding: 4em;
`;
