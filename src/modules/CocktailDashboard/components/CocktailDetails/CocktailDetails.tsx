import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import {
  cocktailDataSelector,
  isFetchingSelector,
} from 'modules/CocktailDashboard/redux/selectors'
import { CocktailCodeType } from 'modules/CocktailDashboard/redux/cocktailSlice'
import { ICocktail } from 'services/cocktailService/types'
import { CocktailCard } from './CocktailCard'
import './CocktailDetails.scss'

function CocktailDetails() {
  const { cocktailCode } = useParams<{ cocktailCode: CocktailCodeType }>()
  const cocktailData = useSelector(cocktailDataSelector)
  const isFetching = useSelector(isFetchingSelector)

  const renderData = cocktailData?.[cocktailCode!]

  return (
    <div className='cocktail-details-wrapper'>
      {renderData?.map((cocktail: ICocktail) => (
        <CocktailCard key={cocktail.idDrink} cardData={cocktail} />
      ))}

      {isFetching && <div className='service-notice'>Loading...</div>}
      {!isFetching && !cocktailData[cocktailCode!] && (
        <div className='service-notice'>Network Error</div>
      )}
    </div>
  )
}

export default CocktailDetails
