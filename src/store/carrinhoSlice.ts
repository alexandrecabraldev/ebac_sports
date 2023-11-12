import {PayloadAction, createSlice} from "@reduxjs/toolkit"
import { Produto } from "../App"


const initialState:Produto[]=[]

export const carrinho = createSlice({
  name:'carrinho',
  initialState,

  reducers:{
    addToCart:(state, action: PayloadAction<Produto>)=>{
      // return [...state, action.payload]

      if (state.find((p) => p.id === action.payload.id)) {
        alert('Item já adicionado')
      } else {
        return [...state, action.payload]
      }
    }
  }
})

export const {addToCart} = carrinho.actions
export default carrinho.reducer
