import styled from 'styled-components'

export const StyledHeader = styled.header`
  background: #D73035;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 198px;
`

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 6px;
    }

    h2 {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      opacity: 0.9;
    }
  }
`
