import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  background: #fff;
  border-radius: 5px;

  img {
    height: 5.75rem;
  }

  div {
    h1 {
      max-width: 5.875rem;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    span {
      margin-top: 0.5rem;
      color: #A0A0B2;
      font-size: 0.75rem;
    }

    p {
      color: #E83F5B;
      font-weight: bold;
    }
  }

  div.buttons-container {
    display: flex;
    align-items: center;
    flex-direction: column;

    button {
      border: 0;
      border-radius: 5px;
      height: 2.5rem;
      width: 2.5rem;
      background: #FDECEF;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: filter 0.2s;

      & + button {
        margin-top: 0.5rem;
      }

      &:hover {
        filter: brightness(0.95);
      }
    }
  }
`;
