import { Order } from '../../@types/Order'
import { OrdersBoard } from '../OrdersBoard'

import { StyledContainer } from './Orders.styles'

const orders: Order[] = [
  {
    '_id': '637427417d2a229e02dc8c9c',
    'table': '1',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668546079797-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 2,
        '_id': '637427417d2a229e02dc8c9d'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668546561422-coca-cola.png',
          'price': 7,
        },
        'quantity': 1,
        '_id': '637427417d2a229e02dc8c9e'
      }
    ],
  },
  {
    '_id': '6374274a7d2a229e02dc8ca0',
    'table': '3',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668546079797-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 1,
        '_id': '6374274a7d2a229e02dc8ca1'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668546561422-coca-cola.png',
          'price': 7,
        },
        'quantity': 1,
        '_id': '6374274a7d2a229e02dc8ca2'
      }
    ],
  }
]

export function Orders(){
  return (
    <StyledContainer>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em produção"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </StyledContainer>
  )
}
