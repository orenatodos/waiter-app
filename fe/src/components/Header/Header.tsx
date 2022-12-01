
import logoImg from '../../assets/images/logo.svg'

import { StyledContainer, StyledHeader } from './Header.styles'

export function Header(){
  return (
    <StyledHeader>
      <StyledContainer>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={logoImg} alt="" />
      </StyledContainer>
    </StyledHeader>
  )
}
