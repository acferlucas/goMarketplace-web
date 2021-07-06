import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.875rem 0 2.875rem;
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    
    div {
      display: flex;
      align-items: center;

      h1 {
        margin-left: 0.5rem;
        color: #E83F5B;
        font-size: 1.25rem;
      }
    }

    strong {
      margin-top: 0.5rem;
      color: #3D3D4C;
      font-size: 0.875rem;
    }
  }
`