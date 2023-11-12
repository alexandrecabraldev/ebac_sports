import * as S from './styles'

// import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const Header = () => {
  const cart = useSelector((state: RootState) => state.carrinho)
  const favorito = useSelector((state: RootState) => state.favorito)

  const valorTotal = cart.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favorito.length} favoritos</span>
        <img src={cesta} />
        <span>
          {cart.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
