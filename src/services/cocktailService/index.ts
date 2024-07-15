import { CocktailCodeType } from 'modules/CocktailDashboard/redux/cocktailSlice'
import { ICocktailDrinks } from './types'
import networkService from 'services/networkService'

export const cocktailGetRequest = (query: CocktailCodeType) =>
  networkService.get<ICocktailDrinks>('/search.php', { s: query })
