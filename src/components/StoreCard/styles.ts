import styled from 'styled-components';

export const Container = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 0.3125rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;

  img {
    height: 7.625rem;
  }

  p {
    margin-top: 1.375rem;
    font-size: 0.875rem;
    color: #3D3D4D;
  }

  div {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: #E83F5B;
    }

    button {
      width: 6.25rem;
      height: 1.875rem;
      border-radius: 6px;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: bold;
      border: 0;
      background-color: #E83F5B;
      color: #fff;
    }
  }
`;
