import { useEffect } from 'react'
import { CocktailSidebar } from './components/CocktailSidebar'
import { CocktailDetails } from './components/CocktailDetails'
import { useDispatch, useSelector } from 'react-redux'
import { cocktailDataSelector } from './redux/selectors'
import { CocktailCodeType, cocktailSliceActions } from './redux/cocktailSlice'
import { useParams } from 'react-router-dom'
import './CocktailDashboard.scss'

function CocktailDashboard() {
  const dispatch = useDispatch()
  const { cocktailCode } = useParams<{ cocktailCode: CocktailCodeType }>()
  const cocktailData = useSelector(cocktailDataSelector)

  useEffect(() => {
    if (cocktailCode && cocktailData[cocktailCode] === null)
      dispatch(cocktailSliceActions.cocktailGetRequest(cocktailCode))
  }, [cocktailCode])

  return (
    <div className='cocktail-dashboard-wrapper'>
      <CocktailSidebar />
      <CocktailDetails />
    </div>
  )
}

export default CocktailDashboard
