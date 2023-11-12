import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../App'

const initialState: Produto[] = []

export const favorito = createSlice({
  name: 'produto',
  initialState,

  reducers: {
    favoritar(state, action: PayloadAction<Produto>) {
      if (state.find((p) => p.id === action.payload.id)) {
        const favoritosSemProduto = state.filter(
          (p) => p.id !== action.payload.id
        )
        return favoritosSemProduto
      } else {
        return [...state, action.payload]
      }
    }
  }
})

export const { favoritar } = favorito.actions
export default favorito.reducer
