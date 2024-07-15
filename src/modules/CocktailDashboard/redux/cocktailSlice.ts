import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICocktail, ICocktailDrinks } from 'services/cocktailService/types'

export type CocktailCodeType = 'margarita' | 'mojito' | 'a1' | 'kir'

export interface ICocktailSliceState {
  isFetching: boolean
  cocktailData: {
    [key in CocktailCodeType]: ICocktail[] | null
  }
}

const cocktailInitialState: ICocktailSliceState = {
  isFetching: false,
  cocktailData: {
    margarita: null,
    mojito: null,
    a1: null,
    kir: null,
  },
}

const cocktailSlice = createSlice({
  name: 'COCKTAIL',
  initialState: cocktailInitialState,
  reducers: {
    cocktailGetRequest: (state, _action: PayloadAction<CocktailCodeType>) => {
      state.isFetching = true
    },
    cocktailGetSuccess: (
      state,
      {
        payload,
      }: PayloadAction<{
        cocktailCode: CocktailCodeType
        cocktailFetchedData: ICocktailDrinks
      }>
    ) => {
      state.isFetching = false
      state.cocktailData[payload.cocktailCode] =
        payload.cocktailFetchedData?.drinks
    },
    cocktailGetError: state => {
      state.isFetching = false
    },
  },
})

export const cocktailSliceActions = cocktailSlice.actions

export default cocktailSlice.reducer
