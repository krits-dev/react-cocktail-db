import { createSelector } from '@reduxjs/toolkit'
import { ICocktailSliceState } from './cocktailSlice'
import { RootState } from 'store/store'

const cocktailSelector = (state: RootState) => state.cocktail

export const isFetchingSelector = createSelector(
  cocktailSelector,
  ({ isFetching }: ICocktailSliceState) => isFetching
)

export const cocktailDataSelector = createSelector(
  cocktailSelector,
  ({ cocktailData }: ICocktailSliceState) => cocktailData
)
