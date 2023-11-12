import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../store/produtos'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data, isLoading } = useGetProdutosQuery()

  return (
    <>
      <S.Produtos>
        {!isLoading &&
          data &&
          data.map((produto) => <Produto key={produto.id} produto={produto} />)}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
