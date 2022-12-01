import styled from 'styled-components'

export const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      background: transparent;
      border: 0;
      line-height: 0;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
    }
  }
`

export const StyledOrderDetails = styled.div`
  margin-top: 32px;

  & > strong {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        color: #666;
        font-size: 14px;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          color: #666;
          font-size: 14px;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`

export const StyledActions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  button {
    border: 0;
  }

  .primary {
    background: #333;
    border-radius: 9999px;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .secondary {
    background: transparent;
    color: #d73035;
    font-weight: 700;
    padding: 14px 24px;
    margin-top: 8px;
  }
`
