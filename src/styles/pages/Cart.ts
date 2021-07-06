import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  main {
    padding: 3.5rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 6.5rem;
    row-gap: 2.375rem;
    max-width: 61.5rem;
    width: 100%;
  }
`;

export const CartInfo = styled.footer`
  width: 100%;
  background: #E83F5B;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  color: #fff;
  padding: 0 5.25rem;
  height: 3.5rem;

  div {
    display: flex;
    align-items: center;

    p {
      margin-left: 1.25rem;
    }
  }
`