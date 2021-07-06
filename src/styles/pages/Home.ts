import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1.875rem;
    row-gap: 1.5rem;
    width: 80.625rem;
  }
`